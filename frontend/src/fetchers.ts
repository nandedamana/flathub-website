import { Appstream } from "./types/Appstream"
import { Category } from "./types/Category"

import {
  POPULAR_LAST_MONTH_URL,
  APP_DETAILS,
  RECENTLY_UPDATED_URL,
  RECENTLY_ADDED_URL,
  CATEGORY_URL,
  SEARCH_APP,
  SUMMARY_DETAILS,
  STATS_DETAILS,
  DEVELOPER_URL,
  VERIFIED_APPS_URL,
  SUBCATEGORY_URL,
  APPSTREAM_URL,
  TRENDING_LAST_TWO_WEEKS_URL,
} from "./env"
import { Summary } from "./types/Summary"
import { AppStats } from "./types/AppStats"
import {
  AppsIndex,
  MeilisearchResponse,
  MeilisearchResponseLimited,
} from "./meilisearch"
import axios from "axios"
import { getAddonsAddonAppIdGet } from "./codegen"

export async function fetchAppstreamList() {
  return axios.get<string[]>(APPSTREAM_URL)
}

export async function fetchAppstream(appId: string) {
  return axios.get<Appstream>(`${APP_DETAILS(appId)}`).catch((error) => {
    return {
      data: null,
    }
  })
}

export async function fetchSummary(appId: string) {
  return axios.get<Summary>(`${SUMMARY_DETAILS(appId)}`).catch((error) => {
    return {
      data: null,
    }
  })
}

export async function fetchAppStats(appId: string) {
  return axios.get<AppStats>(`${STATS_DETAILS(appId)}`).catch((error) => {
    return {
      data: {
        id: appId,
        installs_per_day: {},
        installs_last_7_days: 0,
        installs_last_month: 0,
        installs_total: 0,
      },
    }
  })
}

export async function fetchCollectionPopularLastMonth(
  page: number,
  per_page: number,
) {
  return axios.get<MeilisearchResponse<AppsIndex>>(
    POPULAR_LAST_MONTH_URL(page, per_page),
  )
}

export async function fetchCollectionTrendingLastTwoWeeks(
  page: number,
  per_page: number,
) {
  return axios.get<MeilisearchResponse<AppsIndex>>(
    TRENDING_LAST_TWO_WEEKS_URL(page, per_page),
  )
}

export async function fetchCollectionRecentlyUpdated(
  page: number,
  per_page: number,
) {
  return axios.get<MeilisearchResponse<AppsIndex>>(
    RECENTLY_UPDATED_URL(page, per_page),
  )
}

export async function fetchCollectionRecentlyAdded(
  page: number,
  per_page: number,
) {
  return axios.get<MeilisearchResponse<AppsIndex>>(
    RECENTLY_ADDED_URL(page, per_page),
  )
}
export async function fetchCollectionVerified(page: number, per_page: number) {
  return axios.get<MeilisearchResponse<AppsIndex>>(
    VERIFIED_APPS_URL(page, per_page),
  )
}

export async function fetchCategory(
  category: keyof typeof Category,
  page?: number,
  per_page?: number,
) {
  return axios.get<MeilisearchResponse<AppsIndex>>(
    CATEGORY_URL(category, page, per_page),
  )
}

export async function fetchSubcategory(
  category: keyof typeof Category,
  subcategory: string,
  page?: number,
  per_page?: number,
) {
  return axios.get<MeilisearchResponse<AppsIndex>>(
    SUBCATEGORY_URL(category, subcategory, page, per_page),
  )
}

export async function fetchDeveloperApps(
  developer: string | undefined,
  page?: number,
  per_page?: number,
) {
  if (!developer) {
    console.log("No developer specified")
    return { data: null }
  }
  console.log(`Fetching apps for developer ${developer}`)
  return axios
    .get<
      MeilisearchResponse<AppsIndex>
    >(DEVELOPER_URL(developer, page, per_page))
    .catch((error) => {
      return {
        data: null,
      }
    })
}

export async function fetchSearchQuery(
  query: string,
  selectedFilters: {
    filterType: string
    value: string
  }[],
) {
  return axios.post<MeilisearchResponseLimited<AppsIndex>>(
    SEARCH_APP,
    {
      query: query,
      filters: selectedFilters,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}

export async function fetchAddons(appid: string) {
  const addonList = await getAddonsAddonAppIdGet(appid)

  const addonAppstreams = await Promise.all(addonList.data.map(fetchAppstream))

  const addonAppStats = await Promise.all(addonList.data.map(fetchAppStats))

  const combined = addonAppstreams.map((item) => {
    return {
      id: item.data.id,
      appstream: item.data,
      stats: addonAppStats.find((stats) => stats.data.id === item.data.id)
        ?.data,
    }
  })

  console.log("\nAddons for ", appid, " fetched")

  combined.sort((a, b) => {
    return b.stats.installs_total - a.stats.installs_total
  })

  return combined.map((item) => item.appstream)
}
