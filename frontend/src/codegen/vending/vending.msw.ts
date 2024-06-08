/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import type {
  RedemptionResult,
  TokenCancellation,
  TokenList,
  TokenModel,
  VendingApplicationInformation,
  VendingConfig,
  VendingOutput,
  VendingRedirect,
  VendingSetup,
  VendingStatus,
} from ".././model"

export const getStatusVendingStatusGetResponseMock = (
  overrideResponse: Partial<VendingStatus> = {},
): VendingStatus => ({
  can_take_payments: faker.datatype.boolean(),
  details_submitted: faker.datatype.boolean(),
  needs_attention: faker.datatype.boolean(),
  status: faker.word.sample(),
  ...overrideResponse,
})

export const getStartOnboardingVendingStatusOnboardingPostResponseMock = (
  overrideResponse: Partial<VendingRedirect> = {},
): VendingRedirect => ({
  status: faker.word.sample(),
  target_url: faker.word.sample(),
  ...overrideResponse,
})

export const getGetDashboardLinkVendingStatusDashboardlinkGetResponseMock = (
  overrideResponse: Partial<VendingRedirect> = {},
): VendingRedirect => ({
  status: faker.word.sample(),
  target_url: faker.word.sample(),
  ...overrideResponse,
})

export const getGetGlobalVendingConfigVendingConfigGetResponseMock = (
  overrideResponse: Partial<VendingConfig> = {},
): VendingConfig => ({
  fee_cost_percent: faker.number.int({ min: undefined, max: undefined }),
  fee_fixed_cost: faker.number.int({ min: undefined, max: undefined }),
  fee_prefer_percent: faker.number.int({ min: undefined, max: undefined }),
  platforms: {
    [faker.string.alphanumeric(5)]: {
      aliases: Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => faker.word.sample()),
      depends: faker.helpers.arrayElement([
        faker.helpers.arrayElement([faker.word.sample(), null]),
        undefined,
      ]),
      keep: faker.number.int({ min: undefined, max: undefined }),
      stripe_account: faker.helpers.arrayElement([
        faker.helpers.arrayElement([faker.word.sample(), null]),
        undefined,
      ]),
    },
  },
  status: faker.word.sample(),
  ...overrideResponse,
})

export const getGetAppVendingSetupVendingappAppIdSetupGetResponseMock = (
  overrideResponse: Partial<VendingSetup> = {},
): VendingSetup => ({
  appshare: faker.number.int({ min: undefined, max: undefined }),
  currency: faker.word.sample(),
  minimum_payment: faker.number.int({ min: undefined, max: undefined }),
  recommended_donation: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
})

export const getPostAppVendingSetupVendingappAppIdSetupPostResponseMock = (
  overrideResponse: Partial<VendingSetup> = {},
): VendingSetup => ({
  appshare: faker.number.int({ min: undefined, max: undefined }),
  currency: faker.word.sample(),
  minimum_payment: faker.number.int({ min: undefined, max: undefined }),
  recommended_donation: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
})

export const getPostAppVendingStatusVendingappAppIdPostResponseMock = (
  overrideResponse: Partial<VendingOutput> = {},
): VendingOutput => ({
  status: faker.word.sample(),
  transaction: faker.word.sample(),
  ...overrideResponse,
})

export const getGetRedeemableTokensVendingappAppIdTokensGetResponseMock = (
  overrideResponse: Partial<TokenList> = {},
): TokenList => ({
  status: faker.word.sample(),
  tokens: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    changed: faker.word.sample(),
    created: faker.word.sample(),
    id: faker.word.sample(),
    name: faker.word.sample(),
    state: faker.word.sample(),
    token: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), null]),
      undefined,
    ]),
  })),
  total: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
})

export const getCreateTokensVendingappAppIdTokensPostResponseMock =
  (): TokenModel[] =>
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      changed: faker.word.sample(),
      created: faker.word.sample(),
      id: faker.word.sample(),
      name: faker.word.sample(),
      state: faker.word.sample(),
      token: faker.helpers.arrayElement([
        faker.helpers.arrayElement([faker.word.sample(), null]),
        undefined,
      ]),
    }))

export const getCancelTokensVendingappAppIdTokensCancelPostResponseMock =
  (): TokenCancellation[] =>
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({ status: faker.word.sample(), token: faker.word.sample() }))

export const getRedeemTokenVendingappAppIdTokensRedeemTokenPostResponseMock = (
  overrideResponse: Partial<RedemptionResult> = {},
): RedemptionResult => ({
  reason: faker.word.sample(),
  status: faker.word.sample(),
  ...overrideResponse,
})

export const getAppInfoVendingappAppIdInfoGetResponseMock = (
  overrideResponse: Partial<VendingApplicationInformation> = {},
): VendingApplicationInformation => ({
  app_id: faker.word.sample(),
  foss: faker.datatype.boolean(),
  foss_reason: faker.word.sample(),
  kind: faker.helpers.arrayElement([
    "GAME",
    "PRODUCTIVITY",
    "GENERIC",
  ] as const),
  kind_reason: faker.word.sample(),
  ...overrideResponse,
})

export const getStatusVendingStatusGetMockHandler = (
  overrideResponse?:
    | VendingStatus
    | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => VendingStatus),
) => {
  return http.get("*/vending/status", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getStatusVendingStatusGetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getStartOnboardingVendingStatusOnboardingPostMockHandler = (
  overrideResponse?:
    | VendingRedirect
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => VendingRedirect),
) => {
  return http.post("*/vending/status/onboarding", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getStartOnboardingVendingStatusOnboardingPostResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getGetDashboardLinkVendingStatusDashboardlinkGetMockHandler = (
  overrideResponse?:
    | VendingRedirect
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => VendingRedirect),
) => {
  return http.get("*/vending/status/dashboardlink", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getGetDashboardLinkVendingStatusDashboardlinkGetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getGetGlobalVendingConfigVendingConfigGetMockHandler = (
  overrideResponse?:
    | VendingConfig
    | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => VendingConfig),
) => {
  return http.get("*/vending/config", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getGetGlobalVendingConfigVendingConfigGetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getGetAppVendingSetupVendingappAppIdSetupGetMockHandler = (
  overrideResponse?:
    | VendingSetup
    | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => VendingSetup),
) => {
  return http.get("*/vendingapp/:appId/setup", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getGetAppVendingSetupVendingappAppIdSetupGetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getPostAppVendingSetupVendingappAppIdSetupPostMockHandler = (
  overrideResponse?:
    | VendingSetup
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => VendingSetup),
) => {
  return http.post("*/vendingapp/:appId/setup", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getPostAppVendingSetupVendingappAppIdSetupPostResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getPostAppVendingStatusVendingappAppIdPostMockHandler = (
  overrideResponse?:
    | VendingOutput
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => VendingOutput),
) => {
  return http.post("*/vendingapp/:appId", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getPostAppVendingStatusVendingappAppIdPostResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getGetRedeemableTokensVendingappAppIdTokensGetMockHandler = (
  overrideResponse?:
    | TokenList
    | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => TokenList),
) => {
  return http.get("*/vendingapp/:appId/tokens", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getGetRedeemableTokensVendingappAppIdTokensGetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getCreateTokensVendingappAppIdTokensPostMockHandler = (
  overrideResponse?:
    | TokenModel[]
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => TokenModel[]),
) => {
  return http.post("*/vendingapp/:appId/tokens", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getCreateTokensVendingappAppIdTokensPostResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getCancelTokensVendingappAppIdTokensCancelPostMockHandler = (
  overrideResponse?:
    | TokenCancellation[]
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => TokenCancellation[]),
) => {
  return http.post("*/vendingapp/:appId/tokens/cancel", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getCancelTokensVendingappAppIdTokensCancelPostResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getRedeemTokenVendingappAppIdTokensRedeemTokenPostMockHandler = (
  overrideResponse?:
    | RedemptionResult
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => RedemptionResult),
) => {
  return http.post("*/vendingapp/:appId/tokens/redeem/:token", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getRedeemTokenVendingappAppIdTokensRedeemTokenPostResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getAppInfoVendingappAppIdInfoGetMockHandler = (
  overrideResponse?:
    | VendingApplicationInformation
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => VendingApplicationInformation),
) => {
  return http.get("*/vendingapp/:appId/info", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getAppInfoVendingappAppIdInfoGetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}
export const getVendingMock = () => [
  getStatusVendingStatusGetMockHandler(),
  getStartOnboardingVendingStatusOnboardingPostMockHandler(),
  getGetDashboardLinkVendingStatusDashboardlinkGetMockHandler(),
  getGetGlobalVendingConfigVendingConfigGetMockHandler(),
  getGetAppVendingSetupVendingappAppIdSetupGetMockHandler(),
  getPostAppVendingSetupVendingappAppIdSetupPostMockHandler(),
  getPostAppVendingStatusVendingappAppIdPostMockHandler(),
  getGetRedeemableTokensVendingappAppIdTokensGetMockHandler(),
  getCreateTokensVendingappAppIdTokensPostMockHandler(),
  getCancelTokensVendingappAppIdTokensCancelPostMockHandler(),
  getRedeemTokenVendingappAppIdTokensRedeemTokenPostMockHandler(),
  getAppInfoVendingappAppIdInfoGetMockHandler(),
]
