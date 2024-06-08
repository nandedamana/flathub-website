/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import axios from "axios"
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import type {
  BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
  CheckPurchasesResponseSuccess,
  GenerateUpdateTokenResponse,
  GetDownloadTokenResponse,
  GetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetParams,
  GetStorefrontInfoPurchasesStorefrontInfoGetParams,
  HTTPValidationError,
  StorefrontInfo,
} from ".././model"

/**
 * This endpoint is used by the flathub-hooks scripts to get information about an app to insert into the appstream
file and commit metadata.
 * @summary Get Storefront Info
 */
export const getStorefrontInfoPurchasesStorefrontInfoGet = (
  params: GetStorefrontInfoPurchasesStorefrontInfoGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<StorefrontInfo>> => {
  return axios.get(`/purchases/storefront-info`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetStorefrontInfoPurchasesStorefrontInfoGetQueryKey = (
  params: GetStorefrontInfoPurchasesStorefrontInfoGetParams,
) => {
  return [`/purchases/storefront-info`, ...(params ? [params] : [])] as const
}

export const getGetStorefrontInfoPurchasesStorefrontInfoGetQueryOptions = <
  TData = Awaited<
    ReturnType<typeof getStorefrontInfoPurchasesStorefrontInfoGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  params: GetStorefrontInfoPurchasesStorefrontInfoGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getStorefrontInfoPurchasesStorefrontInfoGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetStorefrontInfoPurchasesStorefrontInfoGetQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getStorefrontInfoPurchasesStorefrontInfoGet>>
  > = ({ signal }) =>
    getStorefrontInfoPurchasesStorefrontInfoGet(params, {
      signal,
      ...axiosOptions,
    })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getStorefrontInfoPurchasesStorefrontInfoGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetStorefrontInfoPurchasesStorefrontInfoGetQueryResult =
  NonNullable<
    Awaited<ReturnType<typeof getStorefrontInfoPurchasesStorefrontInfoGet>>
  >
export type GetStorefrontInfoPurchasesStorefrontInfoGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Storefront Info
 */
export const useGetStorefrontInfoPurchasesStorefrontInfoGet = <
  TData = Awaited<
    ReturnType<typeof getStorefrontInfoPurchasesStorefrontInfoGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  params: GetStorefrontInfoPurchasesStorefrontInfoGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getStorefrontInfoPurchasesStorefrontInfoGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetStorefrontInfoPurchasesStorefrontInfoGetQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Gets whether the app is Free Software based on the app ID and license, even if the app is not in the appstream
database yet. This is needed in flat-manager-hooks to run validations the first time an app is uploaded.
 * @summary Get Is Free Software
 */
export const getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet = (
  params: GetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<boolean>> => {
  return axios.get(`/purchases/storefront-info/is-free-software`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetQueryKey =
  (params: GetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetParams) => {
    return [
      `/purchases/storefront-info/is-free-software`,
      ...(params ? [params] : []),
    ] as const
  }

export const getGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<
        typeof getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet
      >
    >,
    TError = AxiosError<HTTPValidationError>,
  >(
    params: GetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetParams,
    options?: {
      query?: Partial<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet
            >
          >,
          TError,
          TData
        >
      >
      axios?: AxiosRequestConfig
    },
  ) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetQueryKey(
        params,
      )

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<
          typeof getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet
        >
      >
    > = ({ signal }) =>
      getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet(params, {
        signal,
        ...axiosOptions,
      })

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet
        >
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type GetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet
      >
    >
  >
export type GetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Is Free Software
 */
export const useGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet = <
  TData = Awaited<
    ReturnType<typeof getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  params: GetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetQueryOptions(
      params,
      options,
    )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Generates an update token for a user account. This token allows the user to generate download tokens for apps they
already own, but does not grant permission to do anything else. By storing this token, flathub-authenticator is
able to update apps without user interaction.
 * @summary Get Update Token
 */
export const getUpdateTokenPurchasesGenerateUpdateTokenPost = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GenerateUpdateTokenResponse>> => {
  return axios.post(`/purchases/generate-update-token`, undefined, options)
}

export const getGetUpdateTokenPurchasesGenerateUpdateTokenPostMutationOptions =
  <TError = AxiosError<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<typeof getUpdateTokenPurchasesGenerateUpdateTokenPost>
      >,
      TError,
      void,
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<ReturnType<typeof getUpdateTokenPurchasesGenerateUpdateTokenPost>>,
    TError,
    void,
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<typeof getUpdateTokenPurchasesGenerateUpdateTokenPost>
      >,
      void
    > = () => {
      return getUpdateTokenPurchasesGenerateUpdateTokenPost(axiosOptions)
    }

    return { mutationFn, ...mutationOptions }
  }

export type GetUpdateTokenPurchasesGenerateUpdateTokenPostMutationResult =
  NonNullable<
    Awaited<ReturnType<typeof getUpdateTokenPurchasesGenerateUpdateTokenPost>>
  >

export type GetUpdateTokenPurchasesGenerateUpdateTokenPostMutationError =
  AxiosError<unknown>

/**
 * @summary Get Update Token
 */
export const useGetUpdateTokenPurchasesGenerateUpdateTokenPost = <
  TError = AxiosError<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getUpdateTokenPurchasesGenerateUpdateTokenPost>>,
    TError,
    void,
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof getUpdateTokenPurchasesGenerateUpdateTokenPost>>,
  TError,
  void,
  TContext
> => {
  const mutationOptions =
    getGetUpdateTokenPurchasesGenerateUpdateTokenPostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Checks whether the logged in user is able to download all of the given app refs.

App IDs can be in the form of full refs, e.g. "app/org.gnome.Maps/x86_64/stable", or just the app ID, e.g.
"org.gnome.Maps".
 * @summary Check Purchases
 */
export const checkPurchasesPurchasesCheckPurchasesPost = (
  checkPurchasesPurchasesCheckPurchasesPostBody: string[],
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<CheckPurchasesResponseSuccess>> => {
  return axios.post(
    `/purchases/check-purchases`,
    checkPurchasesPurchasesCheckPurchasesPostBody,
    options,
  )
}

export const getCheckPurchasesPurchasesCheckPurchasesPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof checkPurchasesPurchasesCheckPurchasesPost>>,
    TError,
    { data: string[] },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof checkPurchasesPurchasesCheckPurchasesPost>>,
  TError,
  { data: string[] },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof checkPurchasesPurchasesCheckPurchasesPost>>,
    { data: string[] }
  > = (props) => {
    const { data } = props ?? {}

    return checkPurchasesPurchasesCheckPurchasesPost(data, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CheckPurchasesPurchasesCheckPurchasesPostMutationResult =
  NonNullable<
    Awaited<ReturnType<typeof checkPurchasesPurchasesCheckPurchasesPost>>
  >
export type CheckPurchasesPurchasesCheckPurchasesPostMutationBody = string[]
export type CheckPurchasesPurchasesCheckPurchasesPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Check Purchases
 */
export const useCheckPurchasesPurchasesCheckPurchasesPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof checkPurchasesPurchasesCheckPurchasesPost>>,
    TError,
    { data: string[] },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof checkPurchasesPurchasesCheckPurchasesPost>>,
  TError,
  { data: string[] },
  TContext
> => {
  const mutationOptions =
    getCheckPurchasesPurchasesCheckPurchasesPostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Generates a download token for the given app IDs. App IDs should be in the form of full refs, e.g.
"app/org.gnome.Maps/x86_64/stable".
 * @summary Get Download Token
 */
export const getDownloadTokenPurchasesGenerateDownloadTokenPost = (
  bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetDownloadTokenResponse>> => {
  return axios.post(
    `/purchases/generate-download-token`,
    bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
    options,
  )
}

export const getGetDownloadTokenPurchasesGenerateDownloadTokenPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<typeof getDownloadTokenPurchasesGenerateDownloadTokenPost>
      >,
      TError,
      { data: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<typeof getDownloadTokenPurchasesGenerateDownloadTokenPost>
    >,
    TError,
    { data: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<typeof getDownloadTokenPurchasesGenerateDownloadTokenPost>
      >,
      { data: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost }
    > = (props) => {
      const { data } = props ?? {}

      return getDownloadTokenPurchasesGenerateDownloadTokenPost(
        data,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type GetDownloadTokenPurchasesGenerateDownloadTokenPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<typeof getDownloadTokenPurchasesGenerateDownloadTokenPost>
    >
  >
export type GetDownloadTokenPurchasesGenerateDownloadTokenPostMutationBody =
  BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost
export type GetDownloadTokenPurchasesGenerateDownloadTokenPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Download Token
 */
export const useGetDownloadTokenPurchasesGenerateDownloadTokenPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<typeof getDownloadTokenPurchasesGenerateDownloadTokenPost>
    >,
    TError,
    { data: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<
    ReturnType<typeof getDownloadTokenPurchasesGenerateDownloadTokenPost>
  >,
  TError,
  { data: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost },
  TContext
> => {
  const mutationOptions =
    getGetDownloadTokenPurchasesGenerateDownloadTokenPostMutationOptions(
      options,
    )

  return useMutation(mutationOptions)
}
