/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import {
  AvailableLoginMethodStatus,
  AvailableMethodType,
  ErrorDetail,
  LoginProvider,
  VerificationMethod,
} from ".././model"
import type {
  AvailableMethods,
  LinkResponse,
  VerificationStatus,
  VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost200,
  WebsiteVerificationResult,
  WebsiteVerificationToken,
} from ".././model"

export const getGetVerificationStatusVerificationAppIdStatusGetResponseMock = (
  overrideResponse: Partial<VerificationStatus> = {},
): VerificationStatus => ({
  detail: faker.helpers.arrayElement([
    faker.helpers.arrayElement([faker.word.sample(), null]),
    undefined,
  ]),
  login_is_organization: faker.helpers.arrayElement([
    faker.helpers.arrayElement([faker.datatype.boolean(), null]),
    undefined,
  ]),
  login_name: faker.helpers.arrayElement([
    faker.helpers.arrayElement([faker.word.sample(), null]),
    undefined,
  ]),
  login_provider: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      faker.helpers.arrayElement(Object.values(LoginProvider)),
      null,
    ]),
    undefined,
  ]),
  method: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      faker.helpers.arrayElement(Object.values(VerificationMethod)),
      null,
    ]),
    undefined,
  ]),
  timestamp: faker.helpers.arrayElement([
    faker.helpers.arrayElement([faker.word.sample(), null]),
    undefined,
  ]),
  verified: faker.datatype.boolean(),
  website: faker.helpers.arrayElement([
    faker.helpers.arrayElement([faker.word.sample(), null]),
    undefined,
  ]),
  ...overrideResponse,
})

export const getGetAvailableMethodsVerificationAppIdAvailableMethodsGetResponseMock =
  (overrideResponse: Partial<AvailableMethods> = {}): AvailableMethods => ({
    detail: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), null]),
      undefined,
    ]),
    methods: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        Array.from(
          { length: faker.number.int({ min: 1, max: 10 }) },
          (_, i) => i + 1,
        ).map(() => ({
          login_is_organization: faker.helpers.arrayElement([
            faker.helpers.arrayElement([faker.datatype.boolean(), null]),
            undefined,
          ]),
          login_name: faker.helpers.arrayElement([
            faker.helpers.arrayElement([faker.word.sample(), null]),
            undefined,
          ]),
          login_provider: faker.helpers.arrayElement([
            faker.helpers.arrayElement([
              faker.helpers.arrayElement(Object.values(LoginProvider)),
              null,
            ]),
            undefined,
          ]),
          login_status: faker.helpers.arrayElement([
            faker.helpers.arrayElement([
              faker.helpers.arrayElement(
                Object.values(AvailableLoginMethodStatus),
              ),
              null,
            ]),
            undefined,
          ]),
          method: faker.helpers.arrayElement(
            Object.values(AvailableMethodType),
          ),
          website: faker.helpers.arrayElement([
            faker.helpers.arrayElement([faker.word.sample(), null]),
            undefined,
          ]),
          website_token: faker.helpers.arrayElement([
            faker.helpers.arrayElement([faker.word.sample(), null]),
            undefined,
          ]),
        })),
        null,
      ]),
      undefined,
    ]),
    ...overrideResponse,
  })

export const getVerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostResponseMock =
  (): VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost200 =>
    faker.helpers.arrayElement([
      { detail: faker.helpers.arrayElement(Object.values(ErrorDetail)) },
      null,
    ])

export const getRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetResponseMock =
  (overrideResponse: Partial<LinkResponse> = {}): LinkResponse => ({
    link: faker.word.sample(),
    ...overrideResponse,
  })

export const getSetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostResponseMock =
  (
    overrideResponse: Partial<WebsiteVerificationToken> = {},
  ): WebsiteVerificationToken => ({
    domain: faker.word.sample(),
    token: faker.word.sample(),
    ...overrideResponse,
  })

export const getConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostResponseMock =
  (
    overrideResponse: Partial<WebsiteVerificationResult> = {},
  ): WebsiteVerificationResult => ({
    detail: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        faker.helpers.arrayElement(Object.values(ErrorDetail)),
        null,
      ]),
      undefined,
    ]),
    status_code: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        null,
      ]),
      undefined,
    ]),
    verified: faker.datatype.boolean(),
    ...overrideResponse,
  })

export const getGetVerificationStatusVerificationAppIdStatusGetMockHandler = (
  overrideResponse?:
    | VerificationStatus
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => VerificationStatus),
) => {
  return http.get("*/verification/:appId/status", async (info) => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? overrideResponse(info)
            : overrideResponse
          : getGetVerificationStatusVerificationAppIdStatusGetResponseMock(),
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

export const getGetAvailableMethodsVerificationAppIdAvailableMethodsGetMockHandler =
  (
    overrideResponse?:
      | AvailableMethods
      | ((
          info: Parameters<Parameters<typeof http.get>[1]>[0],
        ) => AvailableMethods),
  ) => {
    return http.get("*/verification/:appId/available-methods", async (info) => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === "function"
              ? overrideResponse(info)
              : overrideResponse
            : getGetAvailableMethodsVerificationAppIdAvailableMethodsGetResponseMock(),
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

export const getVerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostMockHandler =
  (
    overrideResponse?:
      | VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost200
      | ((
          info: Parameters<Parameters<typeof http.post>[1]>[0],
        ) => VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost200),
  ) => {
    return http.post(
      "*/verification/:appId/verify-by-login-provider",
      async (info) => {
        await delay(1000)
        return new HttpResponse(
          JSON.stringify(
            overrideResponse !== undefined
              ? typeof overrideResponse === "function"
                ? overrideResponse(info)
                : overrideResponse
              : getVerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostResponseMock(),
          ),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
      },
    )
  }

export const getRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetMockHandler =
  (
    overrideResponse?:
      | LinkResponse
      | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => LinkResponse),
  ) => {
    return http.get(
      "*/verification/request-organization-access/github",
      async (info) => {
        await delay(1000)
        return new HttpResponse(
          JSON.stringify(
            overrideResponse !== undefined
              ? typeof overrideResponse === "function"
                ? overrideResponse(info)
                : overrideResponse
              : getRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetResponseMock(),
          ),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
      },
    )
  }

export const getSetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostMockHandler =
  (
    overrideResponse?:
      | WebsiteVerificationToken
      | ((
          info: Parameters<Parameters<typeof http.post>[1]>[0],
        ) => WebsiteVerificationToken),
  ) => {
    return http.post(
      "*/verification/:appId/setup-website-verification",
      async (info) => {
        await delay(1000)
        return new HttpResponse(
          JSON.stringify(
            overrideResponse !== undefined
              ? typeof overrideResponse === "function"
                ? overrideResponse(info)
                : overrideResponse
              : getSetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostResponseMock(),
          ),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
      },
    )
  }

export const getConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostMockHandler =
  (
    overrideResponse?:
      | WebsiteVerificationResult
      | ((
          info: Parameters<Parameters<typeof http.post>[1]>[0],
        ) => WebsiteVerificationResult),
  ) => {
    return http.post(
      "*/verification/:appId/confirm-website-verification",
      async (info) => {
        await delay(1000)
        return new HttpResponse(
          JSON.stringify(
            overrideResponse !== undefined
              ? typeof overrideResponse === "function"
                ? overrideResponse(info)
                : overrideResponse
              : getConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostResponseMock(),
          ),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
      },
    )
  }

export const getUnverifyVerificationAppIdUnverifyPostMockHandler = () => {
  return http.post("*/verification/:appId/unverify", async () => {
    await delay(1000)
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  })
}

export const getSwitchToDirectUploadVerificationAppIdSwitchToDirectUploadPostMockHandler =
  () => {
    return http.post(
      "*/verification/:appId/switch_to_direct_upload",
      async () => {
        await delay(1000)
        return new HttpResponse(null, {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        })
      },
    )
  }

export const getArchiveVerificationAppIdArchivePostMockHandler = () => {
  return http.post("*/verification/:appId/archive", async () => {
    await delay(1000)
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  })
}
export const getVerificationMock = () => [
  getGetVerificationStatusVerificationAppIdStatusGetMockHandler(),
  getGetAvailableMethodsVerificationAppIdAvailableMethodsGetMockHandler(),
  getVerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostMockHandler(),
  getRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetMockHandler(),
  getSetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostMockHandler(),
  getConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostMockHandler(),
  getUnverifyVerificationAppIdUnverifyPostMockHandler(),
  getSwitchToDirectUploadVerificationAppIdSwitchToDirectUploadPostMockHandler(),
  getArchiveVerificationAppIdArchivePostMockHandler(),
]
