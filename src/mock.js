import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const axiosMockInstance = axios.create({
  baseURL: '/mock',
})
const mockAdapter = new MockAdapter(axiosMockInstance, {
  delayResponse: 0,
  onNoMatch: 'passthrough',
})

/**
 * @typedef {import("axios").AxiosResponse} Response
 * @typedef {import("axios").AxiosRequestConfig} RequestConfig
 */

const mockingApiRoutes = [
  {
    method: 'get',
    path: '/api/about',
    requestMethod: 'get',
    resourcePath: 'apiAbout.json',
  },
  {
    method: 'get',
    path: '/api/news',
    requestMethod: 'get',
    resourcePath: 'apiNews.json',
  },
  {
    method: 'get',
    path: '/api/details',
    requestMethod: 'get',
    resourcePath: 'apiDetails.json',
    /**
     * @param {Response} res
     * @param {RequestConfig} config
     */
    dataExtractor: (res, config) => {
      const { list } = res.data
      if (!list) return [500, {}]
      if (config.params) {
        const { id } = config.params
        if (Number.isInteger(id)) {
          return [200, list.find((item) => item.id === id)]
        }
      }
      return [200, { list }]
    },
  },
]

// adpater
//   .onGet('/api/about')
//   .reply(() =>
//     axiosMockInstance.get('apiAbout.json').then((res) => [200, res.data])
//   )

const defaultDataExtractor = (res) => res.data

export function initializeMocking(adpater = mockAdapter) {
  for (let route of mockingApiRoutes) {
    // matching url
    adpater.onAny(route.path).reply((config) => {
      // check method
      if (config.method === route.method) {
        // handle data request
        return axiosMockInstance
          .request({
            method: route.requestMethod,
            url: route.resourcePath,
          })
          .then((res) => {
            if (route.dataExtractor) {
              return route.dataExtractor(res, config)
            }
            return [200, defaultDataExtractor(res)]
          })
      }
      return [500, {}]
    })
  }

  axiosMockInstance.get('/api/details', { params: { id: 1 } }).then(console.log)
  return axiosMockInstance
}
