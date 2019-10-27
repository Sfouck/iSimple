const raw_data = [
  '9月精彩活動盡在臺灣觀光新年曆(觀光局電子報8月30日發行),2019-08-30',
  '自由行每房補助1000元！秋冬國旅獎勵4方案！(觀光局電子報08月16日發行),2019-08-16',
  '2019 Light up Taiwan 極點慢旅(觀光局電子報08月02日發行),2019-08-02',
  '8月精彩活動盡在臺灣觀光新年曆(觀光局電子報07月19日發行),2019-07-19',
  '2019寶島仲夏節 消暑上山、清涼下海，一切從呷冰開始(觀光局電子報7月5日發行),2019-07-05',
  '7月精彩活動盡在臺灣觀光新年曆(觀光局電子報6月21日發行),2019-06-21',
  '五月五 慶端午(觀光局電子報6月6日發行),2019-06-06',
  '6月精彩活動盡在臺灣觀光新年曆(觀光局電子報5月24日發行),2019-05-24',
  '2019福隆國際沙雕藝術季～穿越小鎮尋找亞特蘭提斯～(觀光局電子報5月10日發行),2019-05-10',
  '5月精彩活動盡在臺灣觀光新年曆(觀光局電子報4月26日發行),2019-04-26',
]
const extracted_data = []

for (let d of raw_data) {
  let temp = d.split(',')
  extracted_data.push({
    title: temp[0],
    // date: new Date(temp[1]),
    date: temp[1],
  })
}

export default extracted_data
export { raw_data, extracted_data }