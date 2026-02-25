
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model PostCategory
 * 
 */
export type PostCategory = $Result.DefaultSelection<Prisma.$PostCategoryPayload>
/**
 * Model Prompt
 * 
 */
export type Prompt = $Result.DefaultSelection<Prisma.$PromptPayload>
/**
 * Model PostImage
 * 
 */
export type PostImage = $Result.DefaultSelection<Prisma.$PostImagePayload>
/**
 * Model ScrapeLog
 * 
 */
export type ScrapeLog = $Result.DefaultSelection<Prisma.$ScrapeLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postCategory`: Exposes CRUD operations for the **PostCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostCategories
    * const postCategories = await prisma.postCategory.findMany()
    * ```
    */
  get postCategory(): Prisma.PostCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prompt`: Exposes CRUD operations for the **Prompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompt.findMany()
    * ```
    */
  get prompt(): Prisma.PromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postImage`: Exposes CRUD operations for the **PostImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostImages
    * const postImages = await prisma.postImage.findMany()
    * ```
    */
  get postImage(): Prisma.PostImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scrapeLog`: Exposes CRUD operations for the **ScrapeLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapeLogs
    * const scrapeLogs = await prisma.scrapeLog.findMany()
    * ```
    */
  get scrapeLog(): Prisma.ScrapeLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Category: 'Category',
    PostCategory: 'PostCategory',
    Prompt: 'Prompt',
    PostImage: 'PostImage',
    ScrapeLog: 'ScrapeLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "category" | "postCategory" | "prompt" | "postImage" | "scrapeLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      PostCategory: {
        payload: Prisma.$PostCategoryPayload<ExtArgs>
        fields: Prisma.PostCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>
          }
          findFirst: {
            args: Prisma.PostCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>
          }
          findMany: {
            args: Prisma.PostCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>[]
          }
          create: {
            args: Prisma.PostCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>
          }
          createMany: {
            args: Prisma.PostCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>[]
          }
          delete: {
            args: Prisma.PostCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>
          }
          update: {
            args: Prisma.PostCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PostCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PostCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCategoryPayload>
          }
          aggregate: {
            args: Prisma.PostCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostCategory>
          }
          groupBy: {
            args: Prisma.PostCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PostCategoryCountAggregateOutputType> | number
          }
        }
      }
      Prompt: {
        payload: Prisma.$PromptPayload<ExtArgs>
        fields: Prisma.PromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findFirst: {
            args: Prisma.PromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findMany: {
            args: Prisma.PromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          create: {
            args: Prisma.PromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          createMany: {
            args: Prisma.PromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          delete: {
            args: Prisma.PromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          update: {
            args: Prisma.PromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          deleteMany: {
            args: Prisma.PromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          upsert: {
            args: Prisma.PromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrompt>
          }
          groupBy: {
            args: Prisma.PromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptCountArgs<ExtArgs>
            result: $Utils.Optional<PromptCountAggregateOutputType> | number
          }
        }
      }
      PostImage: {
        payload: Prisma.$PostImagePayload<ExtArgs>
        fields: Prisma.PostImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          findFirst: {
            args: Prisma.PostImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          findMany: {
            args: Prisma.PostImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>[]
          }
          create: {
            args: Prisma.PostImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          createMany: {
            args: Prisma.PostImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>[]
          }
          delete: {
            args: Prisma.PostImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          update: {
            args: Prisma.PostImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          deleteMany: {
            args: Prisma.PostImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>[]
          }
          upsert: {
            args: Prisma.PostImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          aggregate: {
            args: Prisma.PostImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostImage>
          }
          groupBy: {
            args: Prisma.PostImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostImageCountArgs<ExtArgs>
            result: $Utils.Optional<PostImageCountAggregateOutputType> | number
          }
        }
      }
      ScrapeLog: {
        payload: Prisma.$ScrapeLogPayload<ExtArgs>
        fields: Prisma.ScrapeLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          findFirst: {
            args: Prisma.ScrapeLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          findMany: {
            args: Prisma.ScrapeLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>[]
          }
          create: {
            args: Prisma.ScrapeLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          createMany: {
            args: Prisma.ScrapeLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapeLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>[]
          }
          delete: {
            args: Prisma.ScrapeLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          update: {
            args: Prisma.ScrapeLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          deleteMany: {
            args: Prisma.ScrapeLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScrapeLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>[]
          }
          upsert: {
            args: Prisma.ScrapeLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          aggregate: {
            args: Prisma.ScrapeLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapeLog>
          }
          groupBy: {
            args: Prisma.ScrapeLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapeLogCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    category?: CategoryOmit
    postCategory?: PostCategoryOmit
    prompt?: PromptOmit
    postImage?: PostImageOmit
    scrapeLog?: ScrapeLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    prompts: number
    images: number
    categories: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | PostCountOutputTypeCountPromptsArgs
    images?: boolean | PostCountOutputTypeCountImagesArgs
    categories?: boolean | PostCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostImageWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    featuredImage: string | null
    author: string | null
    sourceUrl: string | null
    isScraped: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    featuredImage: string | null
    author: string | null
    sourceUrl: string | null
    isScraped: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    excerpt: number
    featuredImage: number
    author: number
    sourceUrl: number
    isScraped: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    featuredImage?: true
    author?: true
    sourceUrl?: true
    isScraped?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    featuredImage?: true
    author?: true
    sourceUrl?: true
    isScraped?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    featuredImage?: true
    author?: true
    sourceUrl?: true
    isScraped?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string | null
    excerpt: string | null
    featuredImage: string | null
    author: string
    sourceUrl: string | null
    isScraped: boolean
    publishedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    featuredImage?: boolean
    author?: boolean
    sourceUrl?: boolean
    isScraped?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompts?: boolean | Post$promptsArgs<ExtArgs>
    images?: boolean | Post$imagesArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    featuredImage?: boolean
    author?: boolean
    sourceUrl?: boolean
    isScraped?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    featuredImage?: boolean
    author?: boolean
    sourceUrl?: boolean
    isScraped?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    featuredImage?: boolean
    author?: boolean
    sourceUrl?: boolean
    isScraped?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "excerpt" | "featuredImage" | "author" | "sourceUrl" | "isScraped" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | Post$promptsArgs<ExtArgs>
    images?: boolean | Post$imagesArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      prompts: Prisma.$PromptPayload<ExtArgs>[]
      images: Prisma.$PostImagePayload<ExtArgs>[]
      categories: Prisma.$PostCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string | null
      excerpt: string | null
      featuredImage: string | null
      author: string
      sourceUrl: string | null
      isScraped: boolean
      publishedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompts<T extends Post$promptsArgs<ExtArgs> = {}>(args?: Subset<T, Post$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Post$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Post$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Post$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Post$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly excerpt: FieldRef<"Post", 'String'>
    readonly featuredImage: FieldRef<"Post", 'String'>
    readonly author: FieldRef<"Post", 'String'>
    readonly sourceUrl: FieldRef<"Post", 'String'>
    readonly isScraped: FieldRef<"Post", 'Boolean'>
    readonly publishedAt: FieldRef<"Post", 'DateTime'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.prompts
   */
  export type Post$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    cursor?: PromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Post.images
   */
  export type Post$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    where?: PostImageWhereInput
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    cursor?: PostImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostImageScalarFieldEnum | PostImageScalarFieldEnum[]
  }

  /**
   * Post.categories
   */
  export type Post$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    where?: PostCategoryWhereInput
    orderBy?: PostCategoryOrderByWithRelationInput | PostCategoryOrderByWithRelationInput[]
    cursor?: PostCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCategoryScalarFieldEnum | PostCategoryScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      posts: Prisma.$PostCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    where?: PostCategoryWhereInput
    orderBy?: PostCategoryOrderByWithRelationInput | PostCategoryOrderByWithRelationInput[]
    cursor?: PostCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCategoryScalarFieldEnum | PostCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model PostCategory
   */

  export type AggregatePostCategory = {
    _count: PostCategoryCountAggregateOutputType | null
    _min: PostCategoryMinAggregateOutputType | null
    _max: PostCategoryMaxAggregateOutputType | null
  }

  export type PostCategoryMinAggregateOutputType = {
    postId: string | null
    categoryId: string | null
  }

  export type PostCategoryMaxAggregateOutputType = {
    postId: string | null
    categoryId: string | null
  }

  export type PostCategoryCountAggregateOutputType = {
    postId: number
    categoryId: number
    _all: number
  }


  export type PostCategoryMinAggregateInputType = {
    postId?: true
    categoryId?: true
  }

  export type PostCategoryMaxAggregateInputType = {
    postId?: true
    categoryId?: true
  }

  export type PostCategoryCountAggregateInputType = {
    postId?: true
    categoryId?: true
    _all?: true
  }

  export type PostCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCategory to aggregate.
     */
    where?: PostCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCategories to fetch.
     */
    orderBy?: PostCategoryOrderByWithRelationInput | PostCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostCategories
    **/
    _count?: true | PostCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCategoryMaxAggregateInputType
  }

  export type GetPostCategoryAggregateType<T extends PostCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePostCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostCategory[P]>
      : GetScalarType<T[P], AggregatePostCategory[P]>
  }




  export type PostCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCategoryWhereInput
    orderBy?: PostCategoryOrderByWithAggregationInput | PostCategoryOrderByWithAggregationInput[]
    by: PostCategoryScalarFieldEnum[] | PostCategoryScalarFieldEnum
    having?: PostCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCategoryCountAggregateInputType | true
    _min?: PostCategoryMinAggregateInputType
    _max?: PostCategoryMaxAggregateInputType
  }

  export type PostCategoryGroupByOutputType = {
    postId: string
    categoryId: string
    _count: PostCategoryCountAggregateOutputType | null
    _min: PostCategoryMinAggregateOutputType | null
    _max: PostCategoryMaxAggregateOutputType | null
  }

  type GetPostCategoryGroupByPayload<T extends PostCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PostCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PostCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    categoryId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCategory"]>

  export type PostCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    categoryId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCategory"]>

  export type PostCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    categoryId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCategory"]>

  export type PostCategorySelectScalar = {
    postId?: boolean
    categoryId?: boolean
  }

  export type PostCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "categoryId", ExtArgs["result"]["postCategory"]>
  export type PostCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PostCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PostCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $PostCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostCategory"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      categoryId: string
    }, ExtArgs["result"]["postCategory"]>
    composites: {}
  }

  type PostCategoryGetPayload<S extends boolean | null | undefined | PostCategoryDefaultArgs> = $Result.GetResult<Prisma.$PostCategoryPayload, S>

  type PostCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCategoryCountAggregateInputType | true
    }

  export interface PostCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostCategory'], meta: { name: 'PostCategory' } }
    /**
     * Find zero or one PostCategory that matches the filter.
     * @param {PostCategoryFindUniqueArgs} args - Arguments to find a PostCategory
     * @example
     * // Get one PostCategory
     * const postCategory = await prisma.postCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCategoryFindUniqueArgs>(args: SelectSubset<T, PostCategoryFindUniqueArgs<ExtArgs>>): Prisma__PostCategoryClient<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCategoryFindUniqueOrThrowArgs} args - Arguments to find a PostCategory
     * @example
     * // Get one PostCategory
     * const postCategory = await prisma.postCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCategoryClient<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategoryFindFirstArgs} args - Arguments to find a PostCategory
     * @example
     * // Get one PostCategory
     * const postCategory = await prisma.postCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCategoryFindFirstArgs>(args?: SelectSubset<T, PostCategoryFindFirstArgs<ExtArgs>>): Prisma__PostCategoryClient<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategoryFindFirstOrThrowArgs} args - Arguments to find a PostCategory
     * @example
     * // Get one PostCategory
     * const postCategory = await prisma.postCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCategoryClient<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostCategories
     * const postCategories = await prisma.postCategory.findMany()
     * 
     * // Get first 10 PostCategories
     * const postCategories = await prisma.postCategory.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postCategoryWithPostIdOnly = await prisma.postCategory.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostCategoryFindManyArgs>(args?: SelectSubset<T, PostCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostCategory.
     * @param {PostCategoryCreateArgs} args - Arguments to create a PostCategory.
     * @example
     * // Create one PostCategory
     * const PostCategory = await prisma.postCategory.create({
     *   data: {
     *     // ... data to create a PostCategory
     *   }
     * })
     * 
     */
    create<T extends PostCategoryCreateArgs>(args: SelectSubset<T, PostCategoryCreateArgs<ExtArgs>>): Prisma__PostCategoryClient<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostCategories.
     * @param {PostCategoryCreateManyArgs} args - Arguments to create many PostCategories.
     * @example
     * // Create many PostCategories
     * const postCategory = await prisma.postCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCategoryCreateManyArgs>(args?: SelectSubset<T, PostCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostCategories and returns the data saved in the database.
     * @param {PostCategoryCreateManyAndReturnArgs} args - Arguments to create many PostCategories.
     * @example
     * // Create many PostCategories
     * const postCategory = await prisma.postCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostCategories and only return the `postId`
     * const postCategoryWithPostIdOnly = await prisma.postCategory.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostCategory.
     * @param {PostCategoryDeleteArgs} args - Arguments to delete one PostCategory.
     * @example
     * // Delete one PostCategory
     * const PostCategory = await prisma.postCategory.delete({
     *   where: {
     *     // ... filter to delete one PostCategory
     *   }
     * })
     * 
     */
    delete<T extends PostCategoryDeleteArgs>(args: SelectSubset<T, PostCategoryDeleteArgs<ExtArgs>>): Prisma__PostCategoryClient<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostCategory.
     * @param {PostCategoryUpdateArgs} args - Arguments to update one PostCategory.
     * @example
     * // Update one PostCategory
     * const postCategory = await prisma.postCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCategoryUpdateArgs>(args: SelectSubset<T, PostCategoryUpdateArgs<ExtArgs>>): Prisma__PostCategoryClient<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostCategories.
     * @param {PostCategoryDeleteManyArgs} args - Arguments to filter PostCategories to delete.
     * @example
     * // Delete a few PostCategories
     * const { count } = await prisma.postCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCategoryDeleteManyArgs>(args?: SelectSubset<T, PostCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostCategories
     * const postCategory = await prisma.postCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCategoryUpdateManyArgs>(args: SelectSubset<T, PostCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCategories and returns the data updated in the database.
     * @param {PostCategoryUpdateManyAndReturnArgs} args - Arguments to update many PostCategories.
     * @example
     * // Update many PostCategories
     * const postCategory = await prisma.postCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostCategories and only return the `postId`
     * const postCategoryWithPostIdOnly = await prisma.postCategory.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostCategory.
     * @param {PostCategoryUpsertArgs} args - Arguments to update or create a PostCategory.
     * @example
     * // Update or create a PostCategory
     * const postCategory = await prisma.postCategory.upsert({
     *   create: {
     *     // ... data to create a PostCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostCategory we want to update
     *   }
     * })
     */
    upsert<T extends PostCategoryUpsertArgs>(args: SelectSubset<T, PostCategoryUpsertArgs<ExtArgs>>): Prisma__PostCategoryClient<$Result.GetResult<Prisma.$PostCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategoryCountArgs} args - Arguments to filter PostCategories to count.
     * @example
     * // Count the number of PostCategories
     * const count = await prisma.postCategory.count({
     *   where: {
     *     // ... the filter for the PostCategories we want to count
     *   }
     * })
    **/
    count<T extends PostCategoryCountArgs>(
      args?: Subset<T, PostCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCategoryAggregateArgs>(args: Subset<T, PostCategoryAggregateArgs>): Prisma.PrismaPromise<GetPostCategoryAggregateType<T>>

    /**
     * Group by PostCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PostCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostCategory model
   */
  readonly fields: PostCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostCategory model
   */
  interface PostCategoryFieldRefs {
    readonly postId: FieldRef<"PostCategory", 'String'>
    readonly categoryId: FieldRef<"PostCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostCategory findUnique
   */
  export type PostCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PostCategory to fetch.
     */
    where: PostCategoryWhereUniqueInput
  }

  /**
   * PostCategory findUniqueOrThrow
   */
  export type PostCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PostCategory to fetch.
     */
    where: PostCategoryWhereUniqueInput
  }

  /**
   * PostCategory findFirst
   */
  export type PostCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PostCategory to fetch.
     */
    where?: PostCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCategories to fetch.
     */
    orderBy?: PostCategoryOrderByWithRelationInput | PostCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCategories.
     */
    cursor?: PostCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCategories.
     */
    distinct?: PostCategoryScalarFieldEnum | PostCategoryScalarFieldEnum[]
  }

  /**
   * PostCategory findFirstOrThrow
   */
  export type PostCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PostCategory to fetch.
     */
    where?: PostCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCategories to fetch.
     */
    orderBy?: PostCategoryOrderByWithRelationInput | PostCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCategories.
     */
    cursor?: PostCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCategories.
     */
    distinct?: PostCategoryScalarFieldEnum | PostCategoryScalarFieldEnum[]
  }

  /**
   * PostCategory findMany
   */
  export type PostCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PostCategories to fetch.
     */
    where?: PostCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCategories to fetch.
     */
    orderBy?: PostCategoryOrderByWithRelationInput | PostCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostCategories.
     */
    cursor?: PostCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCategories.
     */
    skip?: number
    distinct?: PostCategoryScalarFieldEnum | PostCategoryScalarFieldEnum[]
  }

  /**
   * PostCategory create
   */
  export type PostCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PostCategory.
     */
    data: XOR<PostCategoryCreateInput, PostCategoryUncheckedCreateInput>
  }

  /**
   * PostCategory createMany
   */
  export type PostCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostCategories.
     */
    data: PostCategoryCreateManyInput | PostCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostCategory createManyAndReturn
   */
  export type PostCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PostCategories.
     */
    data: PostCategoryCreateManyInput | PostCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostCategory update
   */
  export type PostCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PostCategory.
     */
    data: XOR<PostCategoryUpdateInput, PostCategoryUncheckedUpdateInput>
    /**
     * Choose, which PostCategory to update.
     */
    where: PostCategoryWhereUniqueInput
  }

  /**
   * PostCategory updateMany
   */
  export type PostCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostCategories.
     */
    data: XOR<PostCategoryUpdateManyMutationInput, PostCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PostCategories to update
     */
    where?: PostCategoryWhereInput
    /**
     * Limit how many PostCategories to update.
     */
    limit?: number
  }

  /**
   * PostCategory updateManyAndReturn
   */
  export type PostCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PostCategories.
     */
    data: XOR<PostCategoryUpdateManyMutationInput, PostCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PostCategories to update
     */
    where?: PostCategoryWhereInput
    /**
     * Limit how many PostCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostCategory upsert
   */
  export type PostCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PostCategory to update in case it exists.
     */
    where: PostCategoryWhereUniqueInput
    /**
     * In case the PostCategory found by the `where` argument doesn't exist, create a new PostCategory with this data.
     */
    create: XOR<PostCategoryCreateInput, PostCategoryUncheckedCreateInput>
    /**
     * In case the PostCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCategoryUpdateInput, PostCategoryUncheckedUpdateInput>
  }

  /**
   * PostCategory delete
   */
  export type PostCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
    /**
     * Filter which PostCategory to delete.
     */
    where: PostCategoryWhereUniqueInput
  }

  /**
   * PostCategory deleteMany
   */
  export type PostCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCategories to delete
     */
    where?: PostCategoryWhereInput
    /**
     * Limit how many PostCategories to delete.
     */
    limit?: number
  }

  /**
   * PostCategory without action
   */
  export type PostCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCategory
     */
    select?: PostCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCategory
     */
    omit?: PostCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  export type PromptAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type PromptSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type PromptMinAggregateOutputType = {
    id: string | null
    postId: string | null
    promptText: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    promptText: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptCountAggregateOutputType = {
    id: number
    postId: number
    promptText: number
    orderIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptAvgAggregateInputType = {
    orderIndex?: true
  }

  export type PromptSumAggregateInputType = {
    orderIndex?: true
  }

  export type PromptMinAggregateInputType = {
    id?: true
    postId?: true
    promptText?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptMaxAggregateInputType = {
    id?: true
    postId?: true
    promptText?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptCountAggregateInputType = {
    id?: true
    postId?: true
    promptText?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompt to aggregate.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptMaxAggregateInputType
  }

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>
  }




  export type PromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithAggregationInput | PromptOrderByWithAggregationInput[]
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum
    having?: PromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptCountAggregateInputType | true
    _avg?: PromptAvgAggregateInputType
    _sum?: PromptSumAggregateInputType
    _min?: PromptMinAggregateInputType
    _max?: PromptMaxAggregateInputType
  }

  export type PromptGroupByOutputType = {
    id: string
    postId: string
    promptText: string
    orderIndex: number
    createdAt: Date
    updatedAt: Date
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptGroupByOutputType[P]>
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
        }
      >
    >


  export type PromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    promptText?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    promptText?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    promptText?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectScalar = {
    id?: boolean
    postId?: boolean
    promptText?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "promptText" | "orderIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["prompt"]>
  export type PromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompt"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      promptText: string
      orderIndex: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prompt"]>
    composites: {}
  }

  type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = $Result.GetResult<Prisma.$PromptPayload, S>

  type PromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptCountAggregateInputType | true
    }

  export interface PromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompt'], meta: { name: 'Prompt' } }
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {PromptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptFindUniqueArgs>(args: SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptFindFirstArgs>(args?: SelectSubset<T, PromptFindFirstArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptFindManyArgs>(args?: SelectSubset<T, PromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prompt.
     * @param {PromptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     * 
     */
    create<T extends PromptCreateArgs>(args: SelectSubset<T, PromptCreateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prompts.
     * @param {PromptCreateManyArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptCreateManyArgs>(args?: SelectSubset<T, PromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prompts and returns the data saved in the database.
     * @param {PromptCreateManyAndReturnArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prompt.
     * @param {PromptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     * 
     */
    delete<T extends PromptDeleteArgs>(args: SelectSubset<T, PromptDeleteArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prompt.
     * @param {PromptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptUpdateArgs>(args: SelectSubset<T, PromptUpdateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prompts.
     * @param {PromptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptDeleteManyArgs>(args?: SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptUpdateManyArgs>(args: SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts and returns the data updated in the database.
     * @param {PromptUpdateManyAndReturnArgs} args - Arguments to update many Prompts.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prompt.
     * @param {PromptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
     */
    upsert<T extends PromptUpsertArgs>(args: SelectSubset<T, PromptUpsertArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptCountArgs>(
      args?: Subset<T, PromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptAggregateArgs>(args: Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptGroupByArgs['orderBy'] }
        : { orderBy?: PromptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompt model
   */
  readonly fields: PromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prompt model
   */
  interface PromptFieldRefs {
    readonly id: FieldRef<"Prompt", 'String'>
    readonly postId: FieldRef<"Prompt", 'String'>
    readonly promptText: FieldRef<"Prompt", 'String'>
    readonly orderIndex: FieldRef<"Prompt", 'Int'>
    readonly createdAt: FieldRef<"Prompt", 'DateTime'>
    readonly updatedAt: FieldRef<"Prompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prompt findUnique
   */
  export type PromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findUniqueOrThrow
   */
  export type PromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findFirst
   */
  export type PromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findFirstOrThrow
   */
  export type PromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findMany
   */
  export type PromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt create
   */
  export type PromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompt.
     */
    data: XOR<PromptCreateInput, PromptUncheckedCreateInput>
  }

  /**
   * Prompt createMany
   */
  export type PromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt createManyAndReturn
   */
  export type PromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompt update
   */
  export type PromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompt.
     */
    data: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
    /**
     * Choose, which Prompt to update.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt updateMany
   */
  export type PromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt updateManyAndReturn
   */
  export type PromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompt upsert
   */
  export type PromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompt to update in case it exists.
     */
    where: PromptWhereUniqueInput
    /**
     * In case the Prompt found by the `where` argument doesn't exist, create a new Prompt with this data.
     */
    create: XOR<PromptCreateInput, PromptUncheckedCreateInput>
    /**
     * In case the Prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
  }

  /**
   * Prompt delete
   */
  export type PromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter which Prompt to delete.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt deleteMany
   */
  export type PromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to delete.
     */
    limit?: number
  }

  /**
   * Prompt without action
   */
  export type PromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
  }


  /**
   * Model PostImage
   */

  export type AggregatePostImage = {
    _count: PostImageCountAggregateOutputType | null
    _avg: PostImageAvgAggregateOutputType | null
    _sum: PostImageSumAggregateOutputType | null
    _min: PostImageMinAggregateOutputType | null
    _max: PostImageMaxAggregateOutputType | null
  }

  export type PostImageAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type PostImageSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type PostImageMinAggregateOutputType = {
    id: string | null
    postId: string | null
    imageUrl: string | null
    altText: string | null
    orderIndex: number | null
    createdAt: Date | null
  }

  export type PostImageMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    imageUrl: string | null
    altText: string | null
    orderIndex: number | null
    createdAt: Date | null
  }

  export type PostImageCountAggregateOutputType = {
    id: number
    postId: number
    imageUrl: number
    altText: number
    orderIndex: number
    createdAt: number
    _all: number
  }


  export type PostImageAvgAggregateInputType = {
    orderIndex?: true
  }

  export type PostImageSumAggregateInputType = {
    orderIndex?: true
  }

  export type PostImageMinAggregateInputType = {
    id?: true
    postId?: true
    imageUrl?: true
    altText?: true
    orderIndex?: true
    createdAt?: true
  }

  export type PostImageMaxAggregateInputType = {
    id?: true
    postId?: true
    imageUrl?: true
    altText?: true
    orderIndex?: true
    createdAt?: true
  }

  export type PostImageCountAggregateInputType = {
    id?: true
    postId?: true
    imageUrl?: true
    altText?: true
    orderIndex?: true
    createdAt?: true
    _all?: true
  }

  export type PostImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostImage to aggregate.
     */
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostImages
    **/
    _count?: true | PostImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostImageMaxAggregateInputType
  }

  export type GetPostImageAggregateType<T extends PostImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePostImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostImage[P]>
      : GetScalarType<T[P], AggregatePostImage[P]>
  }




  export type PostImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostImageWhereInput
    orderBy?: PostImageOrderByWithAggregationInput | PostImageOrderByWithAggregationInput[]
    by: PostImageScalarFieldEnum[] | PostImageScalarFieldEnum
    having?: PostImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostImageCountAggregateInputType | true
    _avg?: PostImageAvgAggregateInputType
    _sum?: PostImageSumAggregateInputType
    _min?: PostImageMinAggregateInputType
    _max?: PostImageMaxAggregateInputType
  }

  export type PostImageGroupByOutputType = {
    id: string
    postId: string
    imageUrl: string
    altText: string | null
    orderIndex: number
    createdAt: Date
    _count: PostImageCountAggregateOutputType | null
    _avg: PostImageAvgAggregateOutputType | null
    _sum: PostImageSumAggregateOutputType | null
    _min: PostImageMinAggregateOutputType | null
    _max: PostImageMaxAggregateOutputType | null
  }

  type GetPostImageGroupByPayload<T extends PostImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostImageGroupByOutputType[P]>
            : GetScalarType<T[P], PostImageGroupByOutputType[P]>
        }
      >
    >


  export type PostImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    imageUrl?: boolean
    altText?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImage"]>

  export type PostImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    imageUrl?: boolean
    altText?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImage"]>

  export type PostImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    imageUrl?: boolean
    altText?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImage"]>

  export type PostImageSelectScalar = {
    id?: boolean
    postId?: boolean
    imageUrl?: boolean
    altText?: boolean
    orderIndex?: boolean
    createdAt?: boolean
  }

  export type PostImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "imageUrl" | "altText" | "orderIndex" | "createdAt", ExtArgs["result"]["postImage"]>
  export type PostImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostImage"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      imageUrl: string
      altText: string | null
      orderIndex: number
      createdAt: Date
    }, ExtArgs["result"]["postImage"]>
    composites: {}
  }

  type PostImageGetPayload<S extends boolean | null | undefined | PostImageDefaultArgs> = $Result.GetResult<Prisma.$PostImagePayload, S>

  type PostImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostImageCountAggregateInputType | true
    }

  export interface PostImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostImage'], meta: { name: 'PostImage' } }
    /**
     * Find zero or one PostImage that matches the filter.
     * @param {PostImageFindUniqueArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostImageFindUniqueArgs>(args: SelectSubset<T, PostImageFindUniqueArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostImageFindUniqueOrThrowArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PostImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageFindFirstArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostImageFindFirstArgs>(args?: SelectSubset<T, PostImageFindFirstArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageFindFirstOrThrowArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PostImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostImages
     * const postImages = await prisma.postImage.findMany()
     * 
     * // Get first 10 PostImages
     * const postImages = await prisma.postImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postImageWithIdOnly = await prisma.postImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostImageFindManyArgs>(args?: SelectSubset<T, PostImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostImage.
     * @param {PostImageCreateArgs} args - Arguments to create a PostImage.
     * @example
     * // Create one PostImage
     * const PostImage = await prisma.postImage.create({
     *   data: {
     *     // ... data to create a PostImage
     *   }
     * })
     * 
     */
    create<T extends PostImageCreateArgs>(args: SelectSubset<T, PostImageCreateArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostImages.
     * @param {PostImageCreateManyArgs} args - Arguments to create many PostImages.
     * @example
     * // Create many PostImages
     * const postImage = await prisma.postImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostImageCreateManyArgs>(args?: SelectSubset<T, PostImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostImages and returns the data saved in the database.
     * @param {PostImageCreateManyAndReturnArgs} args - Arguments to create many PostImages.
     * @example
     * // Create many PostImages
     * const postImage = await prisma.postImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostImages and only return the `id`
     * const postImageWithIdOnly = await prisma.postImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PostImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostImage.
     * @param {PostImageDeleteArgs} args - Arguments to delete one PostImage.
     * @example
     * // Delete one PostImage
     * const PostImage = await prisma.postImage.delete({
     *   where: {
     *     // ... filter to delete one PostImage
     *   }
     * })
     * 
     */
    delete<T extends PostImageDeleteArgs>(args: SelectSubset<T, PostImageDeleteArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostImage.
     * @param {PostImageUpdateArgs} args - Arguments to update one PostImage.
     * @example
     * // Update one PostImage
     * const postImage = await prisma.postImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostImageUpdateArgs>(args: SelectSubset<T, PostImageUpdateArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostImages.
     * @param {PostImageDeleteManyArgs} args - Arguments to filter PostImages to delete.
     * @example
     * // Delete a few PostImages
     * const { count } = await prisma.postImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostImageDeleteManyArgs>(args?: SelectSubset<T, PostImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostImages
     * const postImage = await prisma.postImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostImageUpdateManyArgs>(args: SelectSubset<T, PostImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages and returns the data updated in the database.
     * @param {PostImageUpdateManyAndReturnArgs} args - Arguments to update many PostImages.
     * @example
     * // Update many PostImages
     * const postImage = await prisma.postImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostImages and only return the `id`
     * const postImageWithIdOnly = await prisma.postImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PostImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostImage.
     * @param {PostImageUpsertArgs} args - Arguments to update or create a PostImage.
     * @example
     * // Update or create a PostImage
     * const postImage = await prisma.postImage.upsert({
     *   create: {
     *     // ... data to create a PostImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostImage we want to update
     *   }
     * })
     */
    upsert<T extends PostImageUpsertArgs>(args: SelectSubset<T, PostImageUpsertArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageCountArgs} args - Arguments to filter PostImages to count.
     * @example
     * // Count the number of PostImages
     * const count = await prisma.postImage.count({
     *   where: {
     *     // ... the filter for the PostImages we want to count
     *   }
     * })
    **/
    count<T extends PostImageCountArgs>(
      args?: Subset<T, PostImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostImageAggregateArgs>(args: Subset<T, PostImageAggregateArgs>): Prisma.PrismaPromise<GetPostImageAggregateType<T>>

    /**
     * Group by PostImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostImageGroupByArgs['orderBy'] }
        : { orderBy?: PostImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostImage model
   */
  readonly fields: PostImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostImage model
   */
  interface PostImageFieldRefs {
    readonly id: FieldRef<"PostImage", 'String'>
    readonly postId: FieldRef<"PostImage", 'String'>
    readonly imageUrl: FieldRef<"PostImage", 'String'>
    readonly altText: FieldRef<"PostImage", 'String'>
    readonly orderIndex: FieldRef<"PostImage", 'Int'>
    readonly createdAt: FieldRef<"PostImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostImage findUnique
   */
  export type PostImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImage to fetch.
     */
    where: PostImageWhereUniqueInput
  }

  /**
   * PostImage findUniqueOrThrow
   */
  export type PostImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImage to fetch.
     */
    where: PostImageWhereUniqueInput
  }

  /**
   * PostImage findFirst
   */
  export type PostImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImage to fetch.
     */
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     */
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     */
    distinct?: PostImageScalarFieldEnum | PostImageScalarFieldEnum[]
  }

  /**
   * PostImage findFirstOrThrow
   */
  export type PostImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImage to fetch.
     */
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     */
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     */
    distinct?: PostImageScalarFieldEnum | PostImageScalarFieldEnum[]
  }

  /**
   * PostImage findMany
   */
  export type PostImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostImages.
     */
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    distinct?: PostImageScalarFieldEnum | PostImageScalarFieldEnum[]
  }

  /**
   * PostImage create
   */
  export type PostImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PostImage.
     */
    data: XOR<PostImageCreateInput, PostImageUncheckedCreateInput>
  }

  /**
   * PostImage createMany
   */
  export type PostImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostImages.
     */
    data: PostImageCreateManyInput | PostImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostImage createManyAndReturn
   */
  export type PostImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * The data used to create many PostImages.
     */
    data: PostImageCreateManyInput | PostImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostImage update
   */
  export type PostImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PostImage.
     */
    data: XOR<PostImageUpdateInput, PostImageUncheckedUpdateInput>
    /**
     * Choose, which PostImage to update.
     */
    where: PostImageWhereUniqueInput
  }

  /**
   * PostImage updateMany
   */
  export type PostImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostImages.
     */
    data: XOR<PostImageUpdateManyMutationInput, PostImageUncheckedUpdateManyInput>
    /**
     * Filter which PostImages to update
     */
    where?: PostImageWhereInput
    /**
     * Limit how many PostImages to update.
     */
    limit?: number
  }

  /**
   * PostImage updateManyAndReturn
   */
  export type PostImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * The data used to update PostImages.
     */
    data: XOR<PostImageUpdateManyMutationInput, PostImageUncheckedUpdateManyInput>
    /**
     * Filter which PostImages to update
     */
    where?: PostImageWhereInput
    /**
     * Limit how many PostImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostImage upsert
   */
  export type PostImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PostImage to update in case it exists.
     */
    where: PostImageWhereUniqueInput
    /**
     * In case the PostImage found by the `where` argument doesn't exist, create a new PostImage with this data.
     */
    create: XOR<PostImageCreateInput, PostImageUncheckedCreateInput>
    /**
     * In case the PostImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostImageUpdateInput, PostImageUncheckedUpdateInput>
  }

  /**
   * PostImage delete
   */
  export type PostImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter which PostImage to delete.
     */
    where: PostImageWhereUniqueInput
  }

  /**
   * PostImage deleteMany
   */
  export type PostImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostImages to delete
     */
    where?: PostImageWhereInput
    /**
     * Limit how many PostImages to delete.
     */
    limit?: number
  }

  /**
   * PostImage without action
   */
  export type PostImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
  }


  /**
   * Model ScrapeLog
   */

  export type AggregateScrapeLog = {
    _count: ScrapeLogCountAggregateOutputType | null
    _avg: ScrapeLogAvgAggregateOutputType | null
    _sum: ScrapeLogSumAggregateOutputType | null
    _min: ScrapeLogMinAggregateOutputType | null
    _max: ScrapeLogMaxAggregateOutputType | null
  }

  export type ScrapeLogAvgAggregateOutputType = {
    pagesCrawled: number | null
    postsFound: number | null
    postsAdded: number | null
    postsSkipped: number | null
    errors: number | null
  }

  export type ScrapeLogSumAggregateOutputType = {
    pagesCrawled: number | null
    postsFound: number | null
    postsAdded: number | null
    postsSkipped: number | null
    errors: number | null
  }

  export type ScrapeLogMinAggregateOutputType = {
    id: string | null
    startedAt: Date | null
    completedAt: Date | null
    status: string | null
    pagesCrawled: number | null
    postsFound: number | null
    postsAdded: number | null
    postsSkipped: number | null
    errors: number | null
    createdAt: Date | null
  }

  export type ScrapeLogMaxAggregateOutputType = {
    id: string | null
    startedAt: Date | null
    completedAt: Date | null
    status: string | null
    pagesCrawled: number | null
    postsFound: number | null
    postsAdded: number | null
    postsSkipped: number | null
    errors: number | null
    createdAt: Date | null
  }

  export type ScrapeLogCountAggregateOutputType = {
    id: number
    startedAt: number
    completedAt: number
    status: number
    pagesCrawled: number
    postsFound: number
    postsAdded: number
    postsSkipped: number
    errors: number
    createdAt: number
    _all: number
  }


  export type ScrapeLogAvgAggregateInputType = {
    pagesCrawled?: true
    postsFound?: true
    postsAdded?: true
    postsSkipped?: true
    errors?: true
  }

  export type ScrapeLogSumAggregateInputType = {
    pagesCrawled?: true
    postsFound?: true
    postsAdded?: true
    postsSkipped?: true
    errors?: true
  }

  export type ScrapeLogMinAggregateInputType = {
    id?: true
    startedAt?: true
    completedAt?: true
    status?: true
    pagesCrawled?: true
    postsFound?: true
    postsAdded?: true
    postsSkipped?: true
    errors?: true
    createdAt?: true
  }

  export type ScrapeLogMaxAggregateInputType = {
    id?: true
    startedAt?: true
    completedAt?: true
    status?: true
    pagesCrawled?: true
    postsFound?: true
    postsAdded?: true
    postsSkipped?: true
    errors?: true
    createdAt?: true
  }

  export type ScrapeLogCountAggregateInputType = {
    id?: true
    startedAt?: true
    completedAt?: true
    status?: true
    pagesCrawled?: true
    postsFound?: true
    postsAdded?: true
    postsSkipped?: true
    errors?: true
    createdAt?: true
    _all?: true
  }

  export type ScrapeLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeLog to aggregate.
     */
    where?: ScrapeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeLogs to fetch.
     */
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapeLogs
    **/
    _count?: true | ScrapeLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScrapeLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScrapeLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeLogMaxAggregateInputType
  }

  export type GetScrapeLogAggregateType<T extends ScrapeLogAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapeLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeLog[P]>
      : GetScalarType<T[P], AggregateScrapeLog[P]>
  }




  export type ScrapeLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeLogWhereInput
    orderBy?: ScrapeLogOrderByWithAggregationInput | ScrapeLogOrderByWithAggregationInput[]
    by: ScrapeLogScalarFieldEnum[] | ScrapeLogScalarFieldEnum
    having?: ScrapeLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeLogCountAggregateInputType | true
    _avg?: ScrapeLogAvgAggregateInputType
    _sum?: ScrapeLogSumAggregateInputType
    _min?: ScrapeLogMinAggregateInputType
    _max?: ScrapeLogMaxAggregateInputType
  }

  export type ScrapeLogGroupByOutputType = {
    id: string
    startedAt: Date
    completedAt: Date | null
    status: string
    pagesCrawled: number
    postsFound: number
    postsAdded: number
    postsSkipped: number
    errors: number | null
    createdAt: Date
    _count: ScrapeLogCountAggregateOutputType | null
    _avg: ScrapeLogAvgAggregateOutputType | null
    _sum: ScrapeLogSumAggregateOutputType | null
    _min: ScrapeLogMinAggregateOutputType | null
    _max: ScrapeLogMaxAggregateOutputType | null
  }

  type GetScrapeLogGroupByPayload<T extends ScrapeLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeLogGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeLogGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    completedAt?: boolean
    status?: boolean
    pagesCrawled?: boolean
    postsFound?: boolean
    postsAdded?: boolean
    postsSkipped?: boolean
    errors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scrapeLog"]>

  export type ScrapeLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    completedAt?: boolean
    status?: boolean
    pagesCrawled?: boolean
    postsFound?: boolean
    postsAdded?: boolean
    postsSkipped?: boolean
    errors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scrapeLog"]>

  export type ScrapeLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    completedAt?: boolean
    status?: boolean
    pagesCrawled?: boolean
    postsFound?: boolean
    postsAdded?: boolean
    postsSkipped?: boolean
    errors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scrapeLog"]>

  export type ScrapeLogSelectScalar = {
    id?: boolean
    startedAt?: boolean
    completedAt?: boolean
    status?: boolean
    pagesCrawled?: boolean
    postsFound?: boolean
    postsAdded?: boolean
    postsSkipped?: boolean
    errors?: boolean
    createdAt?: boolean
  }

  export type ScrapeLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startedAt" | "completedAt" | "status" | "pagesCrawled" | "postsFound" | "postsAdded" | "postsSkipped" | "errors" | "createdAt", ExtArgs["result"]["scrapeLog"]>

  export type $ScrapeLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapeLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startedAt: Date
      completedAt: Date | null
      status: string
      pagesCrawled: number
      postsFound: number
      postsAdded: number
      postsSkipped: number
      errors: number | null
      createdAt: Date
    }, ExtArgs["result"]["scrapeLog"]>
    composites: {}
  }

  type ScrapeLogGetPayload<S extends boolean | null | undefined | ScrapeLogDefaultArgs> = $Result.GetResult<Prisma.$ScrapeLogPayload, S>

  type ScrapeLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeLogCountAggregateInputType | true
    }

  export interface ScrapeLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapeLog'], meta: { name: 'ScrapeLog' } }
    /**
     * Find zero or one ScrapeLog that matches the filter.
     * @param {ScrapeLogFindUniqueArgs} args - Arguments to find a ScrapeLog
     * @example
     * // Get one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeLogFindUniqueArgs>(args: SelectSubset<T, ScrapeLogFindUniqueArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScrapeLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeLogFindUniqueOrThrowArgs} args - Arguments to find a ScrapeLog
     * @example
     * // Get one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogFindFirstArgs} args - Arguments to find a ScrapeLog
     * @example
     * // Get one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeLogFindFirstArgs>(args?: SelectSubset<T, ScrapeLogFindFirstArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogFindFirstOrThrowArgs} args - Arguments to find a ScrapeLog
     * @example
     * // Get one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeLogs
     * const scrapeLogs = await prisma.scrapeLog.findMany()
     * 
     * // Get first 10 ScrapeLogs
     * const scrapeLogs = await prisma.scrapeLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapeLogWithIdOnly = await prisma.scrapeLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapeLogFindManyArgs>(args?: SelectSubset<T, ScrapeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScrapeLog.
     * @param {ScrapeLogCreateArgs} args - Arguments to create a ScrapeLog.
     * @example
     * // Create one ScrapeLog
     * const ScrapeLog = await prisma.scrapeLog.create({
     *   data: {
     *     // ... data to create a ScrapeLog
     *   }
     * })
     * 
     */
    create<T extends ScrapeLogCreateArgs>(args: SelectSubset<T, ScrapeLogCreateArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScrapeLogs.
     * @param {ScrapeLogCreateManyArgs} args - Arguments to create many ScrapeLogs.
     * @example
     * // Create many ScrapeLogs
     * const scrapeLog = await prisma.scrapeLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeLogCreateManyArgs>(args?: SelectSubset<T, ScrapeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapeLogs and returns the data saved in the database.
     * @param {ScrapeLogCreateManyAndReturnArgs} args - Arguments to create many ScrapeLogs.
     * @example
     * // Create many ScrapeLogs
     * const scrapeLog = await prisma.scrapeLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapeLogs and only return the `id`
     * const scrapeLogWithIdOnly = await prisma.scrapeLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapeLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapeLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScrapeLog.
     * @param {ScrapeLogDeleteArgs} args - Arguments to delete one ScrapeLog.
     * @example
     * // Delete one ScrapeLog
     * const ScrapeLog = await prisma.scrapeLog.delete({
     *   where: {
     *     // ... filter to delete one ScrapeLog
     *   }
     * })
     * 
     */
    delete<T extends ScrapeLogDeleteArgs>(args: SelectSubset<T, ScrapeLogDeleteArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScrapeLog.
     * @param {ScrapeLogUpdateArgs} args - Arguments to update one ScrapeLog.
     * @example
     * // Update one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeLogUpdateArgs>(args: SelectSubset<T, ScrapeLogUpdateArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScrapeLogs.
     * @param {ScrapeLogDeleteManyArgs} args - Arguments to filter ScrapeLogs to delete.
     * @example
     * // Delete a few ScrapeLogs
     * const { count } = await prisma.scrapeLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeLogDeleteManyArgs>(args?: SelectSubset<T, ScrapeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeLogs
     * const scrapeLog = await prisma.scrapeLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeLogUpdateManyArgs>(args: SelectSubset<T, ScrapeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeLogs and returns the data updated in the database.
     * @param {ScrapeLogUpdateManyAndReturnArgs} args - Arguments to update many ScrapeLogs.
     * @example
     * // Update many ScrapeLogs
     * const scrapeLog = await prisma.scrapeLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScrapeLogs and only return the `id`
     * const scrapeLogWithIdOnly = await prisma.scrapeLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScrapeLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ScrapeLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScrapeLog.
     * @param {ScrapeLogUpsertArgs} args - Arguments to update or create a ScrapeLog.
     * @example
     * // Update or create a ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.upsert({
     *   create: {
     *     // ... data to create a ScrapeLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeLog we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeLogUpsertArgs>(args: SelectSubset<T, ScrapeLogUpsertArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScrapeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogCountArgs} args - Arguments to filter ScrapeLogs to count.
     * @example
     * // Count the number of ScrapeLogs
     * const count = await prisma.scrapeLog.count({
     *   where: {
     *     // ... the filter for the ScrapeLogs we want to count
     *   }
     * })
    **/
    count<T extends ScrapeLogCountArgs>(
      args?: Subset<T, ScrapeLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapeLogAggregateArgs>(args: Subset<T, ScrapeLogAggregateArgs>): Prisma.PrismaPromise<GetScrapeLogAggregateType<T>>

    /**
     * Group by ScrapeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapeLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeLogGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapeLog model
   */
  readonly fields: ScrapeLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScrapeLog model
   */
  interface ScrapeLogFieldRefs {
    readonly id: FieldRef<"ScrapeLog", 'String'>
    readonly startedAt: FieldRef<"ScrapeLog", 'DateTime'>
    readonly completedAt: FieldRef<"ScrapeLog", 'DateTime'>
    readonly status: FieldRef<"ScrapeLog", 'String'>
    readonly pagesCrawled: FieldRef<"ScrapeLog", 'Int'>
    readonly postsFound: FieldRef<"ScrapeLog", 'Int'>
    readonly postsAdded: FieldRef<"ScrapeLog", 'Int'>
    readonly postsSkipped: FieldRef<"ScrapeLog", 'Int'>
    readonly errors: FieldRef<"ScrapeLog", 'Int'>
    readonly createdAt: FieldRef<"ScrapeLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapeLog findUnique
   */
  export type ScrapeLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeLog to fetch.
     */
    where: ScrapeLogWhereUniqueInput
  }

  /**
   * ScrapeLog findUniqueOrThrow
   */
  export type ScrapeLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeLog to fetch.
     */
    where: ScrapeLogWhereUniqueInput
  }

  /**
   * ScrapeLog findFirst
   */
  export type ScrapeLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeLog to fetch.
     */
    where?: ScrapeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeLogs to fetch.
     */
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeLogs.
     */
    cursor?: ScrapeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeLogs.
     */
    distinct?: ScrapeLogScalarFieldEnum | ScrapeLogScalarFieldEnum[]
  }

  /**
   * ScrapeLog findFirstOrThrow
   */
  export type ScrapeLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeLog to fetch.
     */
    where?: ScrapeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeLogs to fetch.
     */
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeLogs.
     */
    cursor?: ScrapeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeLogs.
     */
    distinct?: ScrapeLogScalarFieldEnum | ScrapeLogScalarFieldEnum[]
  }

  /**
   * ScrapeLog findMany
   */
  export type ScrapeLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeLogs to fetch.
     */
    where?: ScrapeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeLogs to fetch.
     */
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapeLogs.
     */
    cursor?: ScrapeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeLogs.
     */
    skip?: number
    distinct?: ScrapeLogScalarFieldEnum | ScrapeLogScalarFieldEnum[]
  }

  /**
   * ScrapeLog create
   */
  export type ScrapeLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ScrapeLog.
     */
    data?: XOR<ScrapeLogCreateInput, ScrapeLogUncheckedCreateInput>
  }

  /**
   * ScrapeLog createMany
   */
  export type ScrapeLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapeLogs.
     */
    data: ScrapeLogCreateManyInput | ScrapeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeLog createManyAndReturn
   */
  export type ScrapeLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * The data used to create many ScrapeLogs.
     */
    data: ScrapeLogCreateManyInput | ScrapeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeLog update
   */
  export type ScrapeLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ScrapeLog.
     */
    data: XOR<ScrapeLogUpdateInput, ScrapeLogUncheckedUpdateInput>
    /**
     * Choose, which ScrapeLog to update.
     */
    where: ScrapeLogWhereUniqueInput
  }

  /**
   * ScrapeLog updateMany
   */
  export type ScrapeLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapeLogs.
     */
    data: XOR<ScrapeLogUpdateManyMutationInput, ScrapeLogUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeLogs to update
     */
    where?: ScrapeLogWhereInput
    /**
     * Limit how many ScrapeLogs to update.
     */
    limit?: number
  }

  /**
   * ScrapeLog updateManyAndReturn
   */
  export type ScrapeLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * The data used to update ScrapeLogs.
     */
    data: XOR<ScrapeLogUpdateManyMutationInput, ScrapeLogUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeLogs to update
     */
    where?: ScrapeLogWhereInput
    /**
     * Limit how many ScrapeLogs to update.
     */
    limit?: number
  }

  /**
   * ScrapeLog upsert
   */
  export type ScrapeLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ScrapeLog to update in case it exists.
     */
    where: ScrapeLogWhereUniqueInput
    /**
     * In case the ScrapeLog found by the `where` argument doesn't exist, create a new ScrapeLog with this data.
     */
    create: XOR<ScrapeLogCreateInput, ScrapeLogUncheckedCreateInput>
    /**
     * In case the ScrapeLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeLogUpdateInput, ScrapeLogUncheckedUpdateInput>
  }

  /**
   * ScrapeLog delete
   */
  export type ScrapeLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Filter which ScrapeLog to delete.
     */
    where: ScrapeLogWhereUniqueInput
  }

  /**
   * ScrapeLog deleteMany
   */
  export type ScrapeLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeLogs to delete
     */
    where?: ScrapeLogWhereInput
    /**
     * Limit how many ScrapeLogs to delete.
     */
    limit?: number
  }

  /**
   * ScrapeLog without action
   */
  export type ScrapeLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    excerpt: 'excerpt',
    featuredImage: 'featuredImage',
    author: 'author',
    sourceUrl: 'sourceUrl',
    isScraped: 'isScraped',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PostCategoryScalarFieldEnum: {
    postId: 'postId',
    categoryId: 'categoryId'
  };

  export type PostCategoryScalarFieldEnum = (typeof PostCategoryScalarFieldEnum)[keyof typeof PostCategoryScalarFieldEnum]


  export const PromptScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    promptText: 'promptText',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum]


  export const PostImageScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    imageUrl: 'imageUrl',
    altText: 'altText',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt'
  };

  export type PostImageScalarFieldEnum = (typeof PostImageScalarFieldEnum)[keyof typeof PostImageScalarFieldEnum]


  export const ScrapeLogScalarFieldEnum: {
    id: 'id',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    status: 'status',
    pagesCrawled: 'pagesCrawled',
    postsFound: 'postsFound',
    postsAdded: 'postsAdded',
    postsSkipped: 'postsSkipped',
    errors: 'errors',
    createdAt: 'createdAt'
  };

  export type ScrapeLogScalarFieldEnum = (typeof ScrapeLogScalarFieldEnum)[keyof typeof ScrapeLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: UuidFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    excerpt?: StringNullableFilter<"Post"> | string | null
    featuredImage?: StringNullableFilter<"Post"> | string | null
    author?: StringFilter<"Post"> | string
    sourceUrl?: StringNullableFilter<"Post"> | string | null
    isScraped?: BoolFilter<"Post"> | boolean
    publishedAt?: DateTimeFilter<"Post"> | Date | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    prompts?: PromptListRelationFilter
    images?: PostImageListRelationFilter
    categories?: PostCategoryListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    featuredImage?: SortOrderInput | SortOrder
    author?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    isScraped?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompts?: PromptOrderByRelationAggregateInput
    images?: PostImageOrderByRelationAggregateInput
    categories?: PostCategoryOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    excerpt?: StringNullableFilter<"Post"> | string | null
    featuredImage?: StringNullableFilter<"Post"> | string | null
    author?: StringFilter<"Post"> | string
    sourceUrl?: StringNullableFilter<"Post"> | string | null
    isScraped?: BoolFilter<"Post"> | boolean
    publishedAt?: DateTimeFilter<"Post"> | Date | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    prompts?: PromptListRelationFilter
    images?: PostImageListRelationFilter
    categories?: PostCategoryListRelationFilter
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    featuredImage?: SortOrderInput | SortOrder
    author?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    isScraped?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    excerpt?: StringNullableWithAggregatesFilter<"Post"> | string | null
    featuredImage?: StringNullableWithAggregatesFilter<"Post"> | string | null
    author?: StringWithAggregatesFilter<"Post"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    isScraped?: BoolWithAggregatesFilter<"Post"> | boolean
    publishedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    posts?: PostCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    posts?: PostCategoryListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type PostCategoryWhereInput = {
    AND?: PostCategoryWhereInput | PostCategoryWhereInput[]
    OR?: PostCategoryWhereInput[]
    NOT?: PostCategoryWhereInput | PostCategoryWhereInput[]
    postId?: UuidFilter<"PostCategory"> | string
    categoryId?: UuidFilter<"PostCategory"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type PostCategoryOrderByWithRelationInput = {
    postId?: SortOrder
    categoryId?: SortOrder
    post?: PostOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type PostCategoryWhereUniqueInput = Prisma.AtLeast<{
    postId_categoryId?: PostCategoryPostIdCategoryIdCompoundUniqueInput
    AND?: PostCategoryWhereInput | PostCategoryWhereInput[]
    OR?: PostCategoryWhereInput[]
    NOT?: PostCategoryWhereInput | PostCategoryWhereInput[]
    postId?: UuidFilter<"PostCategory"> | string
    categoryId?: UuidFilter<"PostCategory"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "postId_categoryId">

  export type PostCategoryOrderByWithAggregationInput = {
    postId?: SortOrder
    categoryId?: SortOrder
    _count?: PostCategoryCountOrderByAggregateInput
    _max?: PostCategoryMaxOrderByAggregateInput
    _min?: PostCategoryMinOrderByAggregateInput
  }

  export type PostCategoryScalarWhereWithAggregatesInput = {
    AND?: PostCategoryScalarWhereWithAggregatesInput | PostCategoryScalarWhereWithAggregatesInput[]
    OR?: PostCategoryScalarWhereWithAggregatesInput[]
    NOT?: PostCategoryScalarWhereWithAggregatesInput | PostCategoryScalarWhereWithAggregatesInput[]
    postId?: UuidWithAggregatesFilter<"PostCategory"> | string
    categoryId?: UuidWithAggregatesFilter<"PostCategory"> | string
  }

  export type PromptWhereInput = {
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    id?: UuidFilter<"Prompt"> | string
    postId?: UuidFilter<"Prompt"> | string
    promptText?: StringFilter<"Prompt"> | string
    orderIndex?: IntFilter<"Prompt"> | number
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PromptOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    promptText?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    postId?: UuidFilter<"Prompt"> | string
    promptText?: StringFilter<"Prompt"> | string
    orderIndex?: IntFilter<"Prompt"> | number
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PromptOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    promptText?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptCountOrderByAggregateInput
    _avg?: PromptAvgOrderByAggregateInput
    _max?: PromptMaxOrderByAggregateInput
    _min?: PromptMinOrderByAggregateInput
    _sum?: PromptSumOrderByAggregateInput
  }

  export type PromptScalarWhereWithAggregatesInput = {
    AND?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    OR?: PromptScalarWhereWithAggregatesInput[]
    NOT?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Prompt"> | string
    postId?: UuidWithAggregatesFilter<"Prompt"> | string
    promptText?: StringWithAggregatesFilter<"Prompt"> | string
    orderIndex?: IntWithAggregatesFilter<"Prompt"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
  }

  export type PostImageWhereInput = {
    AND?: PostImageWhereInput | PostImageWhereInput[]
    OR?: PostImageWhereInput[]
    NOT?: PostImageWhereInput | PostImageWhereInput[]
    id?: UuidFilter<"PostImage"> | string
    postId?: UuidFilter<"PostImage"> | string
    imageUrl?: StringFilter<"PostImage"> | string
    altText?: StringNullableFilter<"PostImage"> | string | null
    orderIndex?: IntFilter<"PostImage"> | number
    createdAt?: DateTimeFilter<"PostImage"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostImageOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostImageWhereInput | PostImageWhereInput[]
    OR?: PostImageWhereInput[]
    NOT?: PostImageWhereInput | PostImageWhereInput[]
    postId?: UuidFilter<"PostImage"> | string
    imageUrl?: StringFilter<"PostImage"> | string
    altText?: StringNullableFilter<"PostImage"> | string | null
    orderIndex?: IntFilter<"PostImage"> | number
    createdAt?: DateTimeFilter<"PostImage"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostImageOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    _count?: PostImageCountOrderByAggregateInput
    _avg?: PostImageAvgOrderByAggregateInput
    _max?: PostImageMaxOrderByAggregateInput
    _min?: PostImageMinOrderByAggregateInput
    _sum?: PostImageSumOrderByAggregateInput
  }

  export type PostImageScalarWhereWithAggregatesInput = {
    AND?: PostImageScalarWhereWithAggregatesInput | PostImageScalarWhereWithAggregatesInput[]
    OR?: PostImageScalarWhereWithAggregatesInput[]
    NOT?: PostImageScalarWhereWithAggregatesInput | PostImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PostImage"> | string
    postId?: UuidWithAggregatesFilter<"PostImage"> | string
    imageUrl?: StringWithAggregatesFilter<"PostImage"> | string
    altText?: StringNullableWithAggregatesFilter<"PostImage"> | string | null
    orderIndex?: IntWithAggregatesFilter<"PostImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostImage"> | Date | string
  }

  export type ScrapeLogWhereInput = {
    AND?: ScrapeLogWhereInput | ScrapeLogWhereInput[]
    OR?: ScrapeLogWhereInput[]
    NOT?: ScrapeLogWhereInput | ScrapeLogWhereInput[]
    id?: UuidFilter<"ScrapeLog"> | string
    startedAt?: DateTimeFilter<"ScrapeLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"ScrapeLog"> | Date | string | null
    status?: StringFilter<"ScrapeLog"> | string
    pagesCrawled?: IntFilter<"ScrapeLog"> | number
    postsFound?: IntFilter<"ScrapeLog"> | number
    postsAdded?: IntFilter<"ScrapeLog"> | number
    postsSkipped?: IntFilter<"ScrapeLog"> | number
    errors?: IntNullableFilter<"ScrapeLog"> | number | null
    createdAt?: DateTimeFilter<"ScrapeLog"> | Date | string
  }

  export type ScrapeLogOrderByWithRelationInput = {
    id?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    pagesCrawled?: SortOrder
    postsFound?: SortOrder
    postsAdded?: SortOrder
    postsSkipped?: SortOrder
    errors?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrapeLogWhereInput | ScrapeLogWhereInput[]
    OR?: ScrapeLogWhereInput[]
    NOT?: ScrapeLogWhereInput | ScrapeLogWhereInput[]
    startedAt?: DateTimeFilter<"ScrapeLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"ScrapeLog"> | Date | string | null
    status?: StringFilter<"ScrapeLog"> | string
    pagesCrawled?: IntFilter<"ScrapeLog"> | number
    postsFound?: IntFilter<"ScrapeLog"> | number
    postsAdded?: IntFilter<"ScrapeLog"> | number
    postsSkipped?: IntFilter<"ScrapeLog"> | number
    errors?: IntNullableFilter<"ScrapeLog"> | number | null
    createdAt?: DateTimeFilter<"ScrapeLog"> | Date | string
  }, "id">

  export type ScrapeLogOrderByWithAggregationInput = {
    id?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    pagesCrawled?: SortOrder
    postsFound?: SortOrder
    postsAdded?: SortOrder
    postsSkipped?: SortOrder
    errors?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScrapeLogCountOrderByAggregateInput
    _avg?: ScrapeLogAvgOrderByAggregateInput
    _max?: ScrapeLogMaxOrderByAggregateInput
    _min?: ScrapeLogMinOrderByAggregateInput
    _sum?: ScrapeLogSumOrderByAggregateInput
  }

  export type ScrapeLogScalarWhereWithAggregatesInput = {
    AND?: ScrapeLogScalarWhereWithAggregatesInput | ScrapeLogScalarWhereWithAggregatesInput[]
    OR?: ScrapeLogScalarWhereWithAggregatesInput[]
    NOT?: ScrapeLogScalarWhereWithAggregatesInput | ScrapeLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ScrapeLog"> | string
    startedAt?: DateTimeWithAggregatesFilter<"ScrapeLog"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ScrapeLog"> | Date | string | null
    status?: StringWithAggregatesFilter<"ScrapeLog"> | string
    pagesCrawled?: IntWithAggregatesFilter<"ScrapeLog"> | number
    postsFound?: IntWithAggregatesFilter<"ScrapeLog"> | number
    postsAdded?: IntWithAggregatesFilter<"ScrapeLog"> | number
    postsSkipped?: IntWithAggregatesFilter<"ScrapeLog"> | number
    errors?: IntNullableWithAggregatesFilter<"ScrapeLog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ScrapeLog"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutPostInput
    images?: PostImageCreateNestedManyWithoutPostInput
    categories?: PostCategoryCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutPostInput
    images?: PostImageUncheckedCreateNestedManyWithoutPostInput
    categories?: PostCategoryUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutPostNestedInput
    images?: PostImageUpdateManyWithoutPostNestedInput
    categories?: PostCategoryUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutPostNestedInput
    images?: PostImageUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostCategoryUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCategoryCreateInput = {
    post: PostCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutPostsInput
  }

  export type PostCategoryUncheckedCreateInput = {
    postId: string
    categoryId: string
  }

  export type PostCategoryUpdateInput = {
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostCategoryUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCategoryCreateManyInput = {
    postId: string
    categoryId: string
  }

  export type PostCategoryUpdateManyMutationInput = {

  }

  export type PostCategoryUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PromptCreateInput = {
    id?: string
    promptText: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPromptsInput
  }

  export type PromptUncheckedCreateInput = {
    id?: string
    postId: string
    promptText: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type PromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptCreateManyInput = {
    id?: string
    postId: string
    promptText: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageCreateInput = {
    id?: string
    imageUrl: string
    altText?: string | null
    orderIndex?: number
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutImagesInput
  }

  export type PostImageUncheckedCreateInput = {
    id?: string
    postId: string
    imageUrl: string
    altText?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type PostImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PostImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageCreateManyInput = {
    id?: string
    postId: string
    imageUrl: string
    altText?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type PostImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogCreateInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    status?: string
    pagesCrawled?: number
    postsFound?: number
    postsAdded?: number
    postsSkipped?: number
    errors?: number | null
    createdAt?: Date | string
  }

  export type ScrapeLogUncheckedCreateInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    status?: string
    pagesCrawled?: number
    postsFound?: number
    postsAdded?: number
    postsSkipped?: number
    errors?: number | null
    createdAt?: Date | string
  }

  export type ScrapeLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    postsFound?: IntFieldUpdateOperationsInput | number
    postsAdded?: IntFieldUpdateOperationsInput | number
    postsSkipped?: IntFieldUpdateOperationsInput | number
    errors?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    postsFound?: IntFieldUpdateOperationsInput | number
    postsAdded?: IntFieldUpdateOperationsInput | number
    postsSkipped?: IntFieldUpdateOperationsInput | number
    errors?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogCreateManyInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    status?: string
    pagesCrawled?: number
    postsFound?: number
    postsAdded?: number
    postsSkipped?: number
    errors?: number | null
    createdAt?: Date | string
  }

  export type ScrapeLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    postsFound?: IntFieldUpdateOperationsInput | number
    postsAdded?: IntFieldUpdateOperationsInput | number
    postsSkipped?: IntFieldUpdateOperationsInput | number
    errors?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    postsFound?: IntFieldUpdateOperationsInput | number
    postsAdded?: IntFieldUpdateOperationsInput | number
    postsSkipped?: IntFieldUpdateOperationsInput | number
    errors?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PromptListRelationFilter = {
    every?: PromptWhereInput
    some?: PromptWhereInput
    none?: PromptWhereInput
  }

  export type PostImageListRelationFilter = {
    every?: PostImageWhereInput
    some?: PostImageWhereInput
    none?: PostImageWhereInput
  }

  export type PostCategoryListRelationFilter = {
    every?: PostCategoryWhereInput
    some?: PostCategoryWhereInput
    none?: PostCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    featuredImage?: SortOrder
    author?: SortOrder
    sourceUrl?: SortOrder
    isScraped?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    featuredImage?: SortOrder
    author?: SortOrder
    sourceUrl?: SortOrder
    isScraped?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    featuredImage?: SortOrder
    author?: SortOrder
    sourceUrl?: SortOrder
    isScraped?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PostCategoryPostIdCategoryIdCompoundUniqueInput = {
    postId: string
    categoryId: string
  }

  export type PostCategoryCountOrderByAggregateInput = {
    postId?: SortOrder
    categoryId?: SortOrder
  }

  export type PostCategoryMaxOrderByAggregateInput = {
    postId?: SortOrder
    categoryId?: SortOrder
  }

  export type PostCategoryMinOrderByAggregateInput = {
    postId?: SortOrder
    categoryId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PromptCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    promptText?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type PromptMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    promptText?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    promptText?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PostImageCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type PostImageAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type PostImageMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type PostImageMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type PostImageSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ScrapeLogCountOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    pagesCrawled?: SortOrder
    postsFound?: SortOrder
    postsAdded?: SortOrder
    postsSkipped?: SortOrder
    errors?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeLogAvgOrderByAggregateInput = {
    pagesCrawled?: SortOrder
    postsFound?: SortOrder
    postsAdded?: SortOrder
    postsSkipped?: SortOrder
    errors?: SortOrder
  }

  export type ScrapeLogMaxOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    pagesCrawled?: SortOrder
    postsFound?: SortOrder
    postsAdded?: SortOrder
    postsSkipped?: SortOrder
    errors?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeLogMinOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    pagesCrawled?: SortOrder
    postsFound?: SortOrder
    postsAdded?: SortOrder
    postsSkipped?: SortOrder
    errors?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeLogSumOrderByAggregateInput = {
    pagesCrawled?: SortOrder
    postsFound?: SortOrder
    postsAdded?: SortOrder
    postsSkipped?: SortOrder
    errors?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PromptCreateNestedManyWithoutPostInput = {
    create?: XOR<PromptCreateWithoutPostInput, PromptUncheckedCreateWithoutPostInput> | PromptCreateWithoutPostInput[] | PromptUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutPostInput | PromptCreateOrConnectWithoutPostInput[]
    createMany?: PromptCreateManyPostInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type PostImageCreateNestedManyWithoutPostInput = {
    create?: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput> | PostImageCreateWithoutPostInput[] | PostImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImageCreateOrConnectWithoutPostInput | PostImageCreateOrConnectWithoutPostInput[]
    createMany?: PostImageCreateManyPostInputEnvelope
    connect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
  }

  export type PostCategoryCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCategoryCreateWithoutPostInput, PostCategoryUncheckedCreateWithoutPostInput> | PostCategoryCreateWithoutPostInput[] | PostCategoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCategoryCreateOrConnectWithoutPostInput | PostCategoryCreateOrConnectWithoutPostInput[]
    createMany?: PostCategoryCreateManyPostInputEnvelope
    connect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
  }

  export type PromptUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PromptCreateWithoutPostInput, PromptUncheckedCreateWithoutPostInput> | PromptCreateWithoutPostInput[] | PromptUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutPostInput | PromptCreateOrConnectWithoutPostInput[]
    createMany?: PromptCreateManyPostInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type PostImageUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput> | PostImageCreateWithoutPostInput[] | PostImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImageCreateOrConnectWithoutPostInput | PostImageCreateOrConnectWithoutPostInput[]
    createMany?: PostImageCreateManyPostInputEnvelope
    connect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
  }

  export type PostCategoryUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCategoryCreateWithoutPostInput, PostCategoryUncheckedCreateWithoutPostInput> | PostCategoryCreateWithoutPostInput[] | PostCategoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCategoryCreateOrConnectWithoutPostInput | PostCategoryCreateOrConnectWithoutPostInput[]
    createMany?: PostCategoryCreateManyPostInputEnvelope
    connect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PromptUpdateManyWithoutPostNestedInput = {
    create?: XOR<PromptCreateWithoutPostInput, PromptUncheckedCreateWithoutPostInput> | PromptCreateWithoutPostInput[] | PromptUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutPostInput | PromptCreateOrConnectWithoutPostInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutPostInput | PromptUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PromptCreateManyPostInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutPostInput | PromptUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutPostInput | PromptUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type PostImageUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput> | PostImageCreateWithoutPostInput[] | PostImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImageCreateOrConnectWithoutPostInput | PostImageCreateOrConnectWithoutPostInput[]
    upsert?: PostImageUpsertWithWhereUniqueWithoutPostInput | PostImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostImageCreateManyPostInputEnvelope
    set?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    disconnect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    delete?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    connect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    update?: PostImageUpdateWithWhereUniqueWithoutPostInput | PostImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostImageUpdateManyWithWhereWithoutPostInput | PostImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostImageScalarWhereInput | PostImageScalarWhereInput[]
  }

  export type PostCategoryUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCategoryCreateWithoutPostInput, PostCategoryUncheckedCreateWithoutPostInput> | PostCategoryCreateWithoutPostInput[] | PostCategoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCategoryCreateOrConnectWithoutPostInput | PostCategoryCreateOrConnectWithoutPostInput[]
    upsert?: PostCategoryUpsertWithWhereUniqueWithoutPostInput | PostCategoryUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCategoryCreateManyPostInputEnvelope
    set?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    disconnect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    delete?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    connect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    update?: PostCategoryUpdateWithWhereUniqueWithoutPostInput | PostCategoryUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCategoryUpdateManyWithWhereWithoutPostInput | PostCategoryUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCategoryScalarWhereInput | PostCategoryScalarWhereInput[]
  }

  export type PromptUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PromptCreateWithoutPostInput, PromptUncheckedCreateWithoutPostInput> | PromptCreateWithoutPostInput[] | PromptUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutPostInput | PromptCreateOrConnectWithoutPostInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutPostInput | PromptUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PromptCreateManyPostInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutPostInput | PromptUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutPostInput | PromptUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type PostImageUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput> | PostImageCreateWithoutPostInput[] | PostImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImageCreateOrConnectWithoutPostInput | PostImageCreateOrConnectWithoutPostInput[]
    upsert?: PostImageUpsertWithWhereUniqueWithoutPostInput | PostImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostImageCreateManyPostInputEnvelope
    set?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    disconnect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    delete?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    connect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    update?: PostImageUpdateWithWhereUniqueWithoutPostInput | PostImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostImageUpdateManyWithWhereWithoutPostInput | PostImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostImageScalarWhereInput | PostImageScalarWhereInput[]
  }

  export type PostCategoryUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCategoryCreateWithoutPostInput, PostCategoryUncheckedCreateWithoutPostInput> | PostCategoryCreateWithoutPostInput[] | PostCategoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCategoryCreateOrConnectWithoutPostInput | PostCategoryCreateOrConnectWithoutPostInput[]
    upsert?: PostCategoryUpsertWithWhereUniqueWithoutPostInput | PostCategoryUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCategoryCreateManyPostInputEnvelope
    set?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    disconnect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    delete?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    connect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    update?: PostCategoryUpdateWithWhereUniqueWithoutPostInput | PostCategoryUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCategoryUpdateManyWithWhereWithoutPostInput | PostCategoryUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCategoryScalarWhereInput | PostCategoryScalarWhereInput[]
  }

  export type PostCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCategoryCreateWithoutCategoryInput, PostCategoryUncheckedCreateWithoutCategoryInput> | PostCategoryCreateWithoutCategoryInput[] | PostCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCategoryCreateOrConnectWithoutCategoryInput | PostCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: PostCategoryCreateManyCategoryInputEnvelope
    connect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
  }

  export type PostCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCategoryCreateWithoutCategoryInput, PostCategoryUncheckedCreateWithoutCategoryInput> | PostCategoryCreateWithoutCategoryInput[] | PostCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCategoryCreateOrConnectWithoutCategoryInput | PostCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: PostCategoryCreateManyCategoryInputEnvelope
    connect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
  }

  export type PostCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCategoryCreateWithoutCategoryInput, PostCategoryUncheckedCreateWithoutCategoryInput> | PostCategoryCreateWithoutCategoryInput[] | PostCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCategoryCreateOrConnectWithoutCategoryInput | PostCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: PostCategoryUpsertWithWhereUniqueWithoutCategoryInput | PostCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostCategoryCreateManyCategoryInputEnvelope
    set?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    disconnect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    delete?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    connect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    update?: PostCategoryUpdateWithWhereUniqueWithoutCategoryInput | PostCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostCategoryUpdateManyWithWhereWithoutCategoryInput | PostCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostCategoryScalarWhereInput | PostCategoryScalarWhereInput[]
  }

  export type PostCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCategoryCreateWithoutCategoryInput, PostCategoryUncheckedCreateWithoutCategoryInput> | PostCategoryCreateWithoutCategoryInput[] | PostCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCategoryCreateOrConnectWithoutCategoryInput | PostCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: PostCategoryUpsertWithWhereUniqueWithoutCategoryInput | PostCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostCategoryCreateManyCategoryInputEnvelope
    set?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    disconnect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    delete?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    connect?: PostCategoryWhereUniqueInput | PostCategoryWhereUniqueInput[]
    update?: PostCategoryUpdateWithWhereUniqueWithoutCategoryInput | PostCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostCategoryUpdateManyWithWhereWithoutCategoryInput | PostCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostCategoryScalarWhereInput | PostCategoryScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput
    connect?: PostWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput
    upsert?: PostUpsertWithoutCategoriesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCategoriesInput, PostUpdateWithoutCategoriesInput>, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedOneWithoutPromptsInput = {
    create?: XOR<PostCreateWithoutPromptsInput, PostUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPromptsInput
    connect?: PostWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<PostCreateWithoutPromptsInput, PostUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPromptsInput
    upsert?: PostUpsertWithoutPromptsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPromptsInput, PostUpdateWithoutPromptsInput>, PostUncheckedUpdateWithoutPromptsInput>
  }

  export type PostCreateNestedOneWithoutImagesInput = {
    create?: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagesInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagesInput
    upsert?: PostUpsertWithoutImagesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutImagesInput, PostUpdateWithoutImagesInput>, PostUncheckedUpdateWithoutImagesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PromptCreateWithoutPostInput = {
    id?: string
    promptText: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptUncheckedCreateWithoutPostInput = {
    id?: string
    promptText: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptCreateOrConnectWithoutPostInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutPostInput, PromptUncheckedCreateWithoutPostInput>
  }

  export type PromptCreateManyPostInputEnvelope = {
    data: PromptCreateManyPostInput | PromptCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostImageCreateWithoutPostInput = {
    id?: string
    imageUrl: string
    altText?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type PostImageUncheckedCreateWithoutPostInput = {
    id?: string
    imageUrl: string
    altText?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type PostImageCreateOrConnectWithoutPostInput = {
    where: PostImageWhereUniqueInput
    create: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput>
  }

  export type PostImageCreateManyPostInputEnvelope = {
    data: PostImageCreateManyPostInput | PostImageCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostCategoryCreateWithoutPostInput = {
    category: CategoryCreateNestedOneWithoutPostsInput
  }

  export type PostCategoryUncheckedCreateWithoutPostInput = {
    categoryId: string
  }

  export type PostCategoryCreateOrConnectWithoutPostInput = {
    where: PostCategoryWhereUniqueInput
    create: XOR<PostCategoryCreateWithoutPostInput, PostCategoryUncheckedCreateWithoutPostInput>
  }

  export type PostCategoryCreateManyPostInputEnvelope = {
    data: PostCategoryCreateManyPostInput | PostCategoryCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PromptUpsertWithWhereUniqueWithoutPostInput = {
    where: PromptWhereUniqueInput
    update: XOR<PromptUpdateWithoutPostInput, PromptUncheckedUpdateWithoutPostInput>
    create: XOR<PromptCreateWithoutPostInput, PromptUncheckedCreateWithoutPostInput>
  }

  export type PromptUpdateWithWhereUniqueWithoutPostInput = {
    where: PromptWhereUniqueInput
    data: XOR<PromptUpdateWithoutPostInput, PromptUncheckedUpdateWithoutPostInput>
  }

  export type PromptUpdateManyWithWhereWithoutPostInput = {
    where: PromptScalarWhereInput
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyWithoutPostInput>
  }

  export type PromptScalarWhereInput = {
    AND?: PromptScalarWhereInput | PromptScalarWhereInput[]
    OR?: PromptScalarWhereInput[]
    NOT?: PromptScalarWhereInput | PromptScalarWhereInput[]
    id?: UuidFilter<"Prompt"> | string
    postId?: UuidFilter<"Prompt"> | string
    promptText?: StringFilter<"Prompt"> | string
    orderIndex?: IntFilter<"Prompt"> | number
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
  }

  export type PostImageUpsertWithWhereUniqueWithoutPostInput = {
    where: PostImageWhereUniqueInput
    update: XOR<PostImageUpdateWithoutPostInput, PostImageUncheckedUpdateWithoutPostInput>
    create: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput>
  }

  export type PostImageUpdateWithWhereUniqueWithoutPostInput = {
    where: PostImageWhereUniqueInput
    data: XOR<PostImageUpdateWithoutPostInput, PostImageUncheckedUpdateWithoutPostInput>
  }

  export type PostImageUpdateManyWithWhereWithoutPostInput = {
    where: PostImageScalarWhereInput
    data: XOR<PostImageUpdateManyMutationInput, PostImageUncheckedUpdateManyWithoutPostInput>
  }

  export type PostImageScalarWhereInput = {
    AND?: PostImageScalarWhereInput | PostImageScalarWhereInput[]
    OR?: PostImageScalarWhereInput[]
    NOT?: PostImageScalarWhereInput | PostImageScalarWhereInput[]
    id?: UuidFilter<"PostImage"> | string
    postId?: UuidFilter<"PostImage"> | string
    imageUrl?: StringFilter<"PostImage"> | string
    altText?: StringNullableFilter<"PostImage"> | string | null
    orderIndex?: IntFilter<"PostImage"> | number
    createdAt?: DateTimeFilter<"PostImage"> | Date | string
  }

  export type PostCategoryUpsertWithWhereUniqueWithoutPostInput = {
    where: PostCategoryWhereUniqueInput
    update: XOR<PostCategoryUpdateWithoutPostInput, PostCategoryUncheckedUpdateWithoutPostInput>
    create: XOR<PostCategoryCreateWithoutPostInput, PostCategoryUncheckedCreateWithoutPostInput>
  }

  export type PostCategoryUpdateWithWhereUniqueWithoutPostInput = {
    where: PostCategoryWhereUniqueInput
    data: XOR<PostCategoryUpdateWithoutPostInput, PostCategoryUncheckedUpdateWithoutPostInput>
  }

  export type PostCategoryUpdateManyWithWhereWithoutPostInput = {
    where: PostCategoryScalarWhereInput
    data: XOR<PostCategoryUpdateManyMutationInput, PostCategoryUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCategoryScalarWhereInput = {
    AND?: PostCategoryScalarWhereInput | PostCategoryScalarWhereInput[]
    OR?: PostCategoryScalarWhereInput[]
    NOT?: PostCategoryScalarWhereInput | PostCategoryScalarWhereInput[]
    postId?: UuidFilter<"PostCategory"> | string
    categoryId?: UuidFilter<"PostCategory"> | string
  }

  export type PostCategoryCreateWithoutCategoryInput = {
    post: PostCreateNestedOneWithoutCategoriesInput
  }

  export type PostCategoryUncheckedCreateWithoutCategoryInput = {
    postId: string
  }

  export type PostCategoryCreateOrConnectWithoutCategoryInput = {
    where: PostCategoryWhereUniqueInput
    create: XOR<PostCategoryCreateWithoutCategoryInput, PostCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type PostCategoryCreateManyCategoryInputEnvelope = {
    data: PostCategoryCreateManyCategoryInput | PostCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PostCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PostCategoryWhereUniqueInput
    update: XOR<PostCategoryUpdateWithoutCategoryInput, PostCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<PostCategoryCreateWithoutCategoryInput, PostCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type PostCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PostCategoryWhereUniqueInput
    data: XOR<PostCategoryUpdateWithoutCategoryInput, PostCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type PostCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: PostCategoryScalarWhereInput
    data: XOR<PostCategoryUpdateManyMutationInput, PostCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PostCreateWithoutCategoriesInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutPostInput
    images?: PostImageCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutPostInput
    images?: PostImageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutCategoriesInput = {
    update: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type PostUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutPostNestedInput
    images?: PostImageUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutPostNestedInput
    images?: PostImageUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutPromptsInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PostImageCreateNestedManyWithoutPostInput
    categories?: PostCategoryCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPromptsInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PostImageUncheckedCreateNestedManyWithoutPostInput
    categories?: PostCategoryUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPromptsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPromptsInput, PostUncheckedCreateWithoutPromptsInput>
  }

  export type PostUpsertWithoutPromptsInput = {
    update: XOR<PostUpdateWithoutPromptsInput, PostUncheckedUpdateWithoutPromptsInput>
    create: XOR<PostCreateWithoutPromptsInput, PostUncheckedCreateWithoutPromptsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPromptsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPromptsInput, PostUncheckedUpdateWithoutPromptsInput>
  }

  export type PostUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PostImageUpdateManyWithoutPostNestedInput
    categories?: PostCategoryUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PostImageUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostCategoryUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutPostInput
    categories?: PostCategoryCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    content?: string | null
    excerpt?: string | null
    featuredImage?: string | null
    author?: string
    sourceUrl?: string | null
    isScraped?: boolean
    publishedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutPostInput
    categories?: PostCategoryUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutImagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
  }

  export type PostUpsertWithoutImagesInput = {
    update: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutImagesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
  }

  export type PostUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutPostNestedInput
    categories?: PostCategoryUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isScraped?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostCategoryUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PromptCreateManyPostInput = {
    id?: string
    promptText: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostImageCreateManyPostInput = {
    id?: string
    imageUrl: string
    altText?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type PostCategoryCreateManyPostInput = {
    categoryId: string
  }

  export type PromptUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCategoryUpdateWithoutPostInput = {
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostCategoryUncheckedUpdateWithoutPostInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCategoryUncheckedUpdateManyWithoutPostInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCategoryCreateManyCategoryInput = {
    postId: string
  }

  export type PostCategoryUpdateWithoutCategoryInput = {
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type PostCategoryUncheckedUpdateWithoutCategoryInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCategoryUncheckedUpdateManyWithoutCategoryInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}