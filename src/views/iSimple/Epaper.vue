<template>
  <section class="page__epaper">
    <i-cover :background-url="cover_image">
      <template #title>
        <h1>
          地方創生計畫 - 電子報
        </h1>
      </template>
    </i-cover>
    <section class="epaper">
      <table>
        <thead>
          <tr>
            <th
              v-for="col in epaper_table.columns"
              :key="col.key"
              @click="sortBy(col.key)"
              :class="{ active: sortKey == col.key }"
            >
              {{ col.title | capitalize }}
              <!-- <span class="arrow" :class="sortOrder[key] > 0 ? 'asc' : 'dsc'">
              </span> -->
            </th>
            <th>預覽</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in filteredEpapers" :key="index">
            <td v-for="col in epaper_table.columns" :key="col.key">
              {{ entry[col.key] }}
            </td>
            <td>+</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<script>
import epaper_data from '@/assets/data/epaper.js'
export default {
  data() {
    let sortOrders = {}
    let columns = [
      { title: '電子報標題', key: 'title' },
      { title: '發佈日期', key: 'date' },
      // '預覽',
    ]
    columns.forEach(function(key) {
      sortOrders[key] = 1
    })
    return {
      cover_image: 'cover/cover-epaper.jpg',
      epaper_table: {
        columns: columns,
        filiterKey: '',
        epapers: epaper_data,
      },
      sortKey: '',
      sortOrders: sortOrders,
    }
  },
  computed: {
    filteredEpapers: function() {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var epapers = this.epaper_table.epapers
      if (filterKey) {
        epapers = epapers.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      if (sortKey) {
        epapers = epapers.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return epapers
    },
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
  },
}
</script>

<style lang="scss">
.epaper {
  padding: 0 10%;

  > table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 1rem 0.8rem;
  }

  thead {
    border-bottom: 1px grey solid;
    > tr > th {
      font-weight: bold;
      // padding: 1rem 0.8rem;
      &:nth-child(1) {
        width: 60%;
      }
    }
  }

  tbody {
    > tr {
      border-bottom: 1px lightgrey solid;
      td:nth-child(2),
      td:nth-child(3) {
        text-align: center;
      }
    }
  }
}
</style>
