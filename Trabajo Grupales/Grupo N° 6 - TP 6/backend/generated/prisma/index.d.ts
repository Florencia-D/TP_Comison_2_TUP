
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model alumnos
 * 
 */
export type alumnos = $Result.DefaultSelection<Prisma.$alumnosPayload>
/**
 * Model libros
 * 
 */
export type libros = $Result.DefaultSelection<Prisma.$librosPayload>
/**
 * Model prestamos
 * 
 */
export type prestamos = $Result.DefaultSelection<Prisma.$prestamosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const prestamos_estado: {
  prestado: 'prestado',
  devuelto: 'devuelto'
};

export type prestamos_estado = (typeof prestamos_estado)[keyof typeof prestamos_estado]

}

export type prestamos_estado = $Enums.prestamos_estado

export const prestamos_estado: typeof $Enums.prestamos_estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alumnos
 * const alumnos = await prisma.alumnos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Alumnos
   * const alumnos = await prisma.alumnos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alumnos`: Exposes CRUD operations for the **alumnos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alumnos
    * const alumnos = await prisma.alumnos.findMany()
    * ```
    */
  get alumnos(): Prisma.alumnosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libros`: Exposes CRUD operations for the **libros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libros
    * const libros = await prisma.libros.findMany()
    * ```
    */
  get libros(): Prisma.librosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestamos`: Exposes CRUD operations for the **prestamos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestamos
    * const prestamos = await prisma.prestamos.findMany()
    * ```
    */
  get prestamos(): Prisma.prestamosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    alumnos: 'alumnos',
    libros: 'libros',
    prestamos: 'prestamos',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alumnos" | "libros" | "prestamos" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alumnos: {
        payload: Prisma.$alumnosPayload<ExtArgs>
        fields: Prisma.alumnosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alumnosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alumnosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload>
          }
          findFirst: {
            args: Prisma.alumnosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alumnosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload>
          }
          findMany: {
            args: Prisma.alumnosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload>[]
          }
          create: {
            args: Prisma.alumnosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload>
          }
          createMany: {
            args: Prisma.alumnosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.alumnosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload>
          }
          update: {
            args: Prisma.alumnosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload>
          }
          deleteMany: {
            args: Prisma.alumnosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alumnosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.alumnosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumnosPayload>
          }
          aggregate: {
            args: Prisma.AlumnosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumnos>
          }
          groupBy: {
            args: Prisma.alumnosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlumnosGroupByOutputType>[]
          }
          count: {
            args: Prisma.alumnosCountArgs<ExtArgs>
            result: $Utils.Optional<AlumnosCountAggregateOutputType> | number
          }
        }
      }
      libros: {
        payload: Prisma.$librosPayload<ExtArgs>
        fields: Prisma.librosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.librosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.librosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload>
          }
          findFirst: {
            args: Prisma.librosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.librosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload>
          }
          findMany: {
            args: Prisma.librosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload>[]
          }
          create: {
            args: Prisma.librosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload>
          }
          createMany: {
            args: Prisma.librosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.librosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload>
          }
          update: {
            args: Prisma.librosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload>
          }
          deleteMany: {
            args: Prisma.librosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.librosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.librosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librosPayload>
          }
          aggregate: {
            args: Prisma.LibrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibros>
          }
          groupBy: {
            args: Prisma.librosGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.librosCountArgs<ExtArgs>
            result: $Utils.Optional<LibrosCountAggregateOutputType> | number
          }
        }
      }
      prestamos: {
        payload: Prisma.$prestamosPayload<ExtArgs>
        fields: Prisma.prestamosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prestamosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prestamosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          findFirst: {
            args: Prisma.prestamosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prestamosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          findMany: {
            args: Prisma.prestamosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>[]
          }
          create: {
            args: Prisma.prestamosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          createMany: {
            args: Prisma.prestamosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.prestamosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          update: {
            args: Prisma.prestamosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          deleteMany: {
            args: Prisma.prestamosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prestamosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.prestamosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          aggregate: {
            args: Prisma.PrestamosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestamos>
          }
          groupBy: {
            args: Prisma.prestamosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestamosGroupByOutputType>[]
          }
          count: {
            args: Prisma.prestamosCountArgs<ExtArgs>
            result: $Utils.Optional<PrestamosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    alumnos?: alumnosOmit
    libros?: librosOmit
    prestamos?: prestamosOmit
    usuarios?: usuariosOmit
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
   * Count Type AlumnosCountOutputType
   */

  export type AlumnosCountOutputType = {
    prestamos: number
  }

  export type AlumnosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | AlumnosCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * AlumnosCountOutputType without action
   */
  export type AlumnosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnosCountOutputType
     */
    select?: AlumnosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlumnosCountOutputType without action
   */
  export type AlumnosCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamosWhereInput
  }


  /**
   * Count Type LibrosCountOutputType
   */

  export type LibrosCountOutputType = {
    prestamos: number
  }

  export type LibrosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | LibrosCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * LibrosCountOutputType without action
   */
  export type LibrosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibrosCountOutputType
     */
    select?: LibrosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibrosCountOutputType without action
   */
  export type LibrosCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alumnos
   */

  export type AggregateAlumnos = {
    _count: AlumnosCountAggregateOutputType | null
    _avg: AlumnosAvgAggregateOutputType | null
    _sum: AlumnosSumAggregateOutputType | null
    _min: AlumnosMinAggregateOutputType | null
    _max: AlumnosMaxAggregateOutputType | null
  }

  export type AlumnosAvgAggregateOutputType = {
    alumno_id: number | null
  }

  export type AlumnosSumAggregateOutputType = {
    alumno_id: number | null
  }

  export type AlumnosMinAggregateOutputType = {
    alumno_id: number | null
    nombre: string | null
    curso: string | null
    dni: string | null
  }

  export type AlumnosMaxAggregateOutputType = {
    alumno_id: number | null
    nombre: string | null
    curso: string | null
    dni: string | null
  }

  export type AlumnosCountAggregateOutputType = {
    alumno_id: number
    nombre: number
    curso: number
    dni: number
    _all: number
  }


  export type AlumnosAvgAggregateInputType = {
    alumno_id?: true
  }

  export type AlumnosSumAggregateInputType = {
    alumno_id?: true
  }

  export type AlumnosMinAggregateInputType = {
    alumno_id?: true
    nombre?: true
    curso?: true
    dni?: true
  }

  export type AlumnosMaxAggregateInputType = {
    alumno_id?: true
    nombre?: true
    curso?: true
    dni?: true
  }

  export type AlumnosCountAggregateInputType = {
    alumno_id?: true
    nombre?: true
    curso?: true
    dni?: true
    _all?: true
  }

  export type AlumnosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos to aggregate.
     */
    where?: alumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumnos to fetch.
     */
    orderBy?: alumnosOrderByWithRelationInput | alumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alumnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alumnos
    **/
    _count?: true | AlumnosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumnosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumnosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumnosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumnosMaxAggregateInputType
  }

  export type GetAlumnosAggregateType<T extends AlumnosAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumnos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumnos[P]>
      : GetScalarType<T[P], AggregateAlumnos[P]>
  }




  export type alumnosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alumnosWhereInput
    orderBy?: alumnosOrderByWithAggregationInput | alumnosOrderByWithAggregationInput[]
    by: AlumnosScalarFieldEnum[] | AlumnosScalarFieldEnum
    having?: alumnosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumnosCountAggregateInputType | true
    _avg?: AlumnosAvgAggregateInputType
    _sum?: AlumnosSumAggregateInputType
    _min?: AlumnosMinAggregateInputType
    _max?: AlumnosMaxAggregateInputType
  }

  export type AlumnosGroupByOutputType = {
    alumno_id: number
    nombre: string
    curso: string | null
    dni: string
    _count: AlumnosCountAggregateOutputType | null
    _avg: AlumnosAvgAggregateOutputType | null
    _sum: AlumnosSumAggregateOutputType | null
    _min: AlumnosMinAggregateOutputType | null
    _max: AlumnosMaxAggregateOutputType | null
  }

  type GetAlumnosGroupByPayload<T extends alumnosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumnosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumnosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumnosGroupByOutputType[P]>
            : GetScalarType<T[P], AlumnosGroupByOutputType[P]>
        }
      >
    >


  export type alumnosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alumno_id?: boolean
    nombre?: boolean
    curso?: boolean
    dni?: boolean
    prestamos?: boolean | alumnos$prestamosArgs<ExtArgs>
    _count?: boolean | AlumnosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumnos"]>



  export type alumnosSelectScalar = {
    alumno_id?: boolean
    nombre?: boolean
    curso?: boolean
    dni?: boolean
  }

  export type alumnosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alumno_id" | "nombre" | "curso" | "dni", ExtArgs["result"]["alumnos"]>
  export type alumnosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | alumnos$prestamosArgs<ExtArgs>
    _count?: boolean | AlumnosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $alumnosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alumnos"
    objects: {
      prestamos: Prisma.$prestamosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      alumno_id: number
      nombre: string
      curso: string | null
      dni: string
    }, ExtArgs["result"]["alumnos"]>
    composites: {}
  }

  type alumnosGetPayload<S extends boolean | null | undefined | alumnosDefaultArgs> = $Result.GetResult<Prisma.$alumnosPayload, S>

  type alumnosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alumnosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlumnosCountAggregateInputType | true
    }

  export interface alumnosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alumnos'], meta: { name: 'alumnos' } }
    /**
     * Find zero or one Alumnos that matches the filter.
     * @param {alumnosFindUniqueArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumnosFindUniqueArgs>(args: SelectSubset<T, alumnosFindUniqueArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alumnos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumnosFindUniqueOrThrowArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumnosFindUniqueOrThrowArgs>(args: SelectSubset<T, alumnosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnosFindFirstArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumnosFindFirstArgs>(args?: SelectSubset<T, alumnosFindFirstArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumnos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnosFindFirstOrThrowArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumnosFindFirstOrThrowArgs>(args?: SelectSubset<T, alumnosFindFirstOrThrowArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos
     * const alumnos = await prisma.alumnos.findMany()
     * 
     * // Get first 10 Alumnos
     * const alumnos = await prisma.alumnos.findMany({ take: 10 })
     * 
     * // Only select the `alumno_id`
     * const alumnosWithAlumno_idOnly = await prisma.alumnos.findMany({ select: { alumno_id: true } })
     * 
     */
    findMany<T extends alumnosFindManyArgs>(args?: SelectSubset<T, alumnosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alumnos.
     * @param {alumnosCreateArgs} args - Arguments to create a Alumnos.
     * @example
     * // Create one Alumnos
     * const Alumnos = await prisma.alumnos.create({
     *   data: {
     *     // ... data to create a Alumnos
     *   }
     * })
     * 
     */
    create<T extends alumnosCreateArgs>(args: SelectSubset<T, alumnosCreateArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alumnos.
     * @param {alumnosCreateManyArgs} args - Arguments to create many Alumnos.
     * @example
     * // Create many Alumnos
     * const alumnos = await prisma.alumnos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alumnosCreateManyArgs>(args?: SelectSubset<T, alumnosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alumnos.
     * @param {alumnosDeleteArgs} args - Arguments to delete one Alumnos.
     * @example
     * // Delete one Alumnos
     * const Alumnos = await prisma.alumnos.delete({
     *   where: {
     *     // ... filter to delete one Alumnos
     *   }
     * })
     * 
     */
    delete<T extends alumnosDeleteArgs>(args: SelectSubset<T, alumnosDeleteArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alumnos.
     * @param {alumnosUpdateArgs} args - Arguments to update one Alumnos.
     * @example
     * // Update one Alumnos
     * const alumnos = await prisma.alumnos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alumnosUpdateArgs>(args: SelectSubset<T, alumnosUpdateArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alumnos.
     * @param {alumnosDeleteManyArgs} args - Arguments to filter Alumnos to delete.
     * @example
     * // Delete a few Alumnos
     * const { count } = await prisma.alumnos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alumnosDeleteManyArgs>(args?: SelectSubset<T, alumnosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos
     * const alumnos = await prisma.alumnos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alumnosUpdateManyArgs>(args: SelectSubset<T, alumnosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alumnos.
     * @param {alumnosUpsertArgs} args - Arguments to update or create a Alumnos.
     * @example
     * // Update or create a Alumnos
     * const alumnos = await prisma.alumnos.upsert({
     *   create: {
     *     // ... data to create a Alumnos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumnos we want to update
     *   }
     * })
     */
    upsert<T extends alumnosUpsertArgs>(args: SelectSubset<T, alumnosUpsertArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnosCountArgs} args - Arguments to filter Alumnos to count.
     * @example
     * // Count the number of Alumnos
     * const count = await prisma.alumnos.count({
     *   where: {
     *     // ... the filter for the Alumnos we want to count
     *   }
     * })
    **/
    count<T extends alumnosCountArgs>(
      args?: Subset<T, alumnosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumnosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumnosAggregateArgs>(args: Subset<T, AlumnosAggregateArgs>): Prisma.PrismaPromise<GetAlumnosAggregateType<T>>

    /**
     * Group by Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnosGroupByArgs} args - Group by arguments.
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
      T extends alumnosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alumnosGroupByArgs['orderBy'] }
        : { orderBy?: alumnosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alumnosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alumnos model
   */
  readonly fields: alumnosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alumnos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alumnosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamos<T extends alumnos$prestamosArgs<ExtArgs> = {}>(args?: Subset<T, alumnos$prestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the alumnos model
   */
  interface alumnosFieldRefs {
    readonly alumno_id: FieldRef<"alumnos", 'Int'>
    readonly nombre: FieldRef<"alumnos", 'String'>
    readonly curso: FieldRef<"alumnos", 'String'>
    readonly dni: FieldRef<"alumnos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * alumnos findUnique
   */
  export type alumnosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * Filter, which alumnos to fetch.
     */
    where: alumnosWhereUniqueInput
  }

  /**
   * alumnos findUniqueOrThrow
   */
  export type alumnosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * Filter, which alumnos to fetch.
     */
    where: alumnosWhereUniqueInput
  }

  /**
   * alumnos findFirst
   */
  export type alumnosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * Filter, which alumnos to fetch.
     */
    where?: alumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumnos to fetch.
     */
    orderBy?: alumnosOrderByWithRelationInput | alumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alumnos.
     */
    cursor?: alumnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alumnos.
     */
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }

  /**
   * alumnos findFirstOrThrow
   */
  export type alumnosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * Filter, which alumnos to fetch.
     */
    where?: alumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumnos to fetch.
     */
    orderBy?: alumnosOrderByWithRelationInput | alumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alumnos.
     */
    cursor?: alumnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alumnos.
     */
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }

  /**
   * alumnos findMany
   */
  export type alumnosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * Filter, which alumnos to fetch.
     */
    where?: alumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumnos to fetch.
     */
    orderBy?: alumnosOrderByWithRelationInput | alumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alumnos.
     */
    cursor?: alumnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumnos.
     */
    skip?: number
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }

  /**
   * alumnos create
   */
  export type alumnosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * The data needed to create a alumnos.
     */
    data: XOR<alumnosCreateInput, alumnosUncheckedCreateInput>
  }

  /**
   * alumnos createMany
   */
  export type alumnosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumnos.
     */
    data: alumnosCreateManyInput | alumnosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alumnos update
   */
  export type alumnosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * The data needed to update a alumnos.
     */
    data: XOR<alumnosUpdateInput, alumnosUncheckedUpdateInput>
    /**
     * Choose, which alumnos to update.
     */
    where: alumnosWhereUniqueInput
  }

  /**
   * alumnos updateMany
   */
  export type alumnosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alumnos.
     */
    data: XOR<alumnosUpdateManyMutationInput, alumnosUncheckedUpdateManyInput>
    /**
     * Filter which alumnos to update
     */
    where?: alumnosWhereInput
    /**
     * Limit how many alumnos to update.
     */
    limit?: number
  }

  /**
   * alumnos upsert
   */
  export type alumnosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * The filter to search for the alumnos to update in case it exists.
     */
    where: alumnosWhereUniqueInput
    /**
     * In case the alumnos found by the `where` argument doesn't exist, create a new alumnos with this data.
     */
    create: XOR<alumnosCreateInput, alumnosUncheckedCreateInput>
    /**
     * In case the alumnos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alumnosUpdateInput, alumnosUncheckedUpdateInput>
  }

  /**
   * alumnos delete
   */
  export type alumnosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
    /**
     * Filter which alumnos to delete.
     */
    where: alumnosWhereUniqueInput
  }

  /**
   * alumnos deleteMany
   */
  export type alumnosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos to delete
     */
    where?: alumnosWhereInput
    /**
     * Limit how many alumnos to delete.
     */
    limit?: number
  }

  /**
   * alumnos.prestamos
   */
  export type alumnos$prestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    where?: prestamosWhereInput
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    cursor?: prestamosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * alumnos without action
   */
  export type alumnosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos
     */
    select?: alumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumnos
     */
    omit?: alumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumnosInclude<ExtArgs> | null
  }


  /**
   * Model libros
   */

  export type AggregateLibros = {
    _count: LibrosCountAggregateOutputType | null
    _avg: LibrosAvgAggregateOutputType | null
    _sum: LibrosSumAggregateOutputType | null
    _min: LibrosMinAggregateOutputType | null
    _max: LibrosMaxAggregateOutputType | null
  }

  export type LibrosAvgAggregateOutputType = {
    libro_id: number | null
    ejemplares_disponibles: number | null
  }

  export type LibrosSumAggregateOutputType = {
    libro_id: number | null
    ejemplares_disponibles: number | null
  }

  export type LibrosMinAggregateOutputType = {
    libro_id: number | null
    titulo: string | null
    autor: string | null
    categoria: string | null
    ejemplares_disponibles: number | null
  }

  export type LibrosMaxAggregateOutputType = {
    libro_id: number | null
    titulo: string | null
    autor: string | null
    categoria: string | null
    ejemplares_disponibles: number | null
  }

  export type LibrosCountAggregateOutputType = {
    libro_id: number
    titulo: number
    autor: number
    categoria: number
    ejemplares_disponibles: number
    _all: number
  }


  export type LibrosAvgAggregateInputType = {
    libro_id?: true
    ejemplares_disponibles?: true
  }

  export type LibrosSumAggregateInputType = {
    libro_id?: true
    ejemplares_disponibles?: true
  }

  export type LibrosMinAggregateInputType = {
    libro_id?: true
    titulo?: true
    autor?: true
    categoria?: true
    ejemplares_disponibles?: true
  }

  export type LibrosMaxAggregateInputType = {
    libro_id?: true
    titulo?: true
    autor?: true
    categoria?: true
    ejemplares_disponibles?: true
  }

  export type LibrosCountAggregateInputType = {
    libro_id?: true
    titulo?: true
    autor?: true
    categoria?: true
    ejemplares_disponibles?: true
    _all?: true
  }

  export type LibrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which libros to aggregate.
     */
    where?: librosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: librosOrderByWithRelationInput | librosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: librosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned libros
    **/
    _count?: true | LibrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibrosMaxAggregateInputType
  }

  export type GetLibrosAggregateType<T extends LibrosAggregateArgs> = {
        [P in keyof T & keyof AggregateLibros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibros[P]>
      : GetScalarType<T[P], AggregateLibros[P]>
  }




  export type librosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: librosWhereInput
    orderBy?: librosOrderByWithAggregationInput | librosOrderByWithAggregationInput[]
    by: LibrosScalarFieldEnum[] | LibrosScalarFieldEnum
    having?: librosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibrosCountAggregateInputType | true
    _avg?: LibrosAvgAggregateInputType
    _sum?: LibrosSumAggregateInputType
    _min?: LibrosMinAggregateInputType
    _max?: LibrosMaxAggregateInputType
  }

  export type LibrosGroupByOutputType = {
    libro_id: number
    titulo: string
    autor: string
    categoria: string | null
    ejemplares_disponibles: number
    _count: LibrosCountAggregateOutputType | null
    _avg: LibrosAvgAggregateOutputType | null
    _sum: LibrosSumAggregateOutputType | null
    _min: LibrosMinAggregateOutputType | null
    _max: LibrosMaxAggregateOutputType | null
  }

  type GetLibrosGroupByPayload<T extends librosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibrosGroupByOutputType[P]>
            : GetScalarType<T[P], LibrosGroupByOutputType[P]>
        }
      >
    >


  export type librosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    libro_id?: boolean
    titulo?: boolean
    autor?: boolean
    categoria?: boolean
    ejemplares_disponibles?: boolean
    prestamos?: boolean | libros$prestamosArgs<ExtArgs>
    _count?: boolean | LibrosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libros"]>



  export type librosSelectScalar = {
    libro_id?: boolean
    titulo?: boolean
    autor?: boolean
    categoria?: boolean
    ejemplares_disponibles?: boolean
  }

  export type librosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"libro_id" | "titulo" | "autor" | "categoria" | "ejemplares_disponibles", ExtArgs["result"]["libros"]>
  export type librosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | libros$prestamosArgs<ExtArgs>
    _count?: boolean | LibrosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $librosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "libros"
    objects: {
      prestamos: Prisma.$prestamosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      libro_id: number
      titulo: string
      autor: string
      categoria: string | null
      ejemplares_disponibles: number
    }, ExtArgs["result"]["libros"]>
    composites: {}
  }

  type librosGetPayload<S extends boolean | null | undefined | librosDefaultArgs> = $Result.GetResult<Prisma.$librosPayload, S>

  type librosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<librosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibrosCountAggregateInputType | true
    }

  export interface librosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['libros'], meta: { name: 'libros' } }
    /**
     * Find zero or one Libros that matches the filter.
     * @param {librosFindUniqueArgs} args - Arguments to find a Libros
     * @example
     * // Get one Libros
     * const libros = await prisma.libros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends librosFindUniqueArgs>(args: SelectSubset<T, librosFindUniqueArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {librosFindUniqueOrThrowArgs} args - Arguments to find a Libros
     * @example
     * // Get one Libros
     * const libros = await prisma.libros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends librosFindUniqueOrThrowArgs>(args: SelectSubset<T, librosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librosFindFirstArgs} args - Arguments to find a Libros
     * @example
     * // Get one Libros
     * const libros = await prisma.libros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends librosFindFirstArgs>(args?: SelectSubset<T, librosFindFirstArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librosFindFirstOrThrowArgs} args - Arguments to find a Libros
     * @example
     * // Get one Libros
     * const libros = await prisma.libros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends librosFindFirstOrThrowArgs>(args?: SelectSubset<T, librosFindFirstOrThrowArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libros
     * const libros = await prisma.libros.findMany()
     * 
     * // Get first 10 Libros
     * const libros = await prisma.libros.findMany({ take: 10 })
     * 
     * // Only select the `libro_id`
     * const librosWithLibro_idOnly = await prisma.libros.findMany({ select: { libro_id: true } })
     * 
     */
    findMany<T extends librosFindManyArgs>(args?: SelectSubset<T, librosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libros.
     * @param {librosCreateArgs} args - Arguments to create a Libros.
     * @example
     * // Create one Libros
     * const Libros = await prisma.libros.create({
     *   data: {
     *     // ... data to create a Libros
     *   }
     * })
     * 
     */
    create<T extends librosCreateArgs>(args: SelectSubset<T, librosCreateArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libros.
     * @param {librosCreateManyArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libros = await prisma.libros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends librosCreateManyArgs>(args?: SelectSubset<T, librosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Libros.
     * @param {librosDeleteArgs} args - Arguments to delete one Libros.
     * @example
     * // Delete one Libros
     * const Libros = await prisma.libros.delete({
     *   where: {
     *     // ... filter to delete one Libros
     *   }
     * })
     * 
     */
    delete<T extends librosDeleteArgs>(args: SelectSubset<T, librosDeleteArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libros.
     * @param {librosUpdateArgs} args - Arguments to update one Libros.
     * @example
     * // Update one Libros
     * const libros = await prisma.libros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends librosUpdateArgs>(args: SelectSubset<T, librosUpdateArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libros.
     * @param {librosDeleteManyArgs} args - Arguments to filter Libros to delete.
     * @example
     * // Delete a few Libros
     * const { count } = await prisma.libros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends librosDeleteManyArgs>(args?: SelectSubset<T, librosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libros
     * const libros = await prisma.libros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends librosUpdateManyArgs>(args: SelectSubset<T, librosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Libros.
     * @param {librosUpsertArgs} args - Arguments to update or create a Libros.
     * @example
     * // Update or create a Libros
     * const libros = await prisma.libros.upsert({
     *   create: {
     *     // ... data to create a Libros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libros we want to update
     *   }
     * })
     */
    upsert<T extends librosUpsertArgs>(args: SelectSubset<T, librosUpsertArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librosCountArgs} args - Arguments to filter Libros to count.
     * @example
     * // Count the number of Libros
     * const count = await prisma.libros.count({
     *   where: {
     *     // ... the filter for the Libros we want to count
     *   }
     * })
    **/
    count<T extends librosCountArgs>(
      args?: Subset<T, librosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibrosAggregateArgs>(args: Subset<T, LibrosAggregateArgs>): Prisma.PrismaPromise<GetLibrosAggregateType<T>>

    /**
     * Group by Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librosGroupByArgs} args - Group by arguments.
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
      T extends librosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: librosGroupByArgs['orderBy'] }
        : { orderBy?: librosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, librosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the libros model
   */
  readonly fields: librosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for libros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__librosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamos<T extends libros$prestamosArgs<ExtArgs> = {}>(args?: Subset<T, libros$prestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the libros model
   */
  interface librosFieldRefs {
    readonly libro_id: FieldRef<"libros", 'Int'>
    readonly titulo: FieldRef<"libros", 'String'>
    readonly autor: FieldRef<"libros", 'String'>
    readonly categoria: FieldRef<"libros", 'String'>
    readonly ejemplares_disponibles: FieldRef<"libros", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * libros findUnique
   */
  export type librosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * Filter, which libros to fetch.
     */
    where: librosWhereUniqueInput
  }

  /**
   * libros findUniqueOrThrow
   */
  export type librosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * Filter, which libros to fetch.
     */
    where: librosWhereUniqueInput
  }

  /**
   * libros findFirst
   */
  export type librosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * Filter, which libros to fetch.
     */
    where?: librosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: librosOrderByWithRelationInput | librosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for libros.
     */
    cursor?: librosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of libros.
     */
    distinct?: LibrosScalarFieldEnum | LibrosScalarFieldEnum[]
  }

  /**
   * libros findFirstOrThrow
   */
  export type librosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * Filter, which libros to fetch.
     */
    where?: librosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: librosOrderByWithRelationInput | librosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for libros.
     */
    cursor?: librosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of libros.
     */
    distinct?: LibrosScalarFieldEnum | LibrosScalarFieldEnum[]
  }

  /**
   * libros findMany
   */
  export type librosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * Filter, which libros to fetch.
     */
    where?: librosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: librosOrderByWithRelationInput | librosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing libros.
     */
    cursor?: librosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    distinct?: LibrosScalarFieldEnum | LibrosScalarFieldEnum[]
  }

  /**
   * libros create
   */
  export type librosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * The data needed to create a libros.
     */
    data: XOR<librosCreateInput, librosUncheckedCreateInput>
  }

  /**
   * libros createMany
   */
  export type librosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many libros.
     */
    data: librosCreateManyInput | librosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * libros update
   */
  export type librosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * The data needed to update a libros.
     */
    data: XOR<librosUpdateInput, librosUncheckedUpdateInput>
    /**
     * Choose, which libros to update.
     */
    where: librosWhereUniqueInput
  }

  /**
   * libros updateMany
   */
  export type librosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update libros.
     */
    data: XOR<librosUpdateManyMutationInput, librosUncheckedUpdateManyInput>
    /**
     * Filter which libros to update
     */
    where?: librosWhereInput
    /**
     * Limit how many libros to update.
     */
    limit?: number
  }

  /**
   * libros upsert
   */
  export type librosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * The filter to search for the libros to update in case it exists.
     */
    where: librosWhereUniqueInput
    /**
     * In case the libros found by the `where` argument doesn't exist, create a new libros with this data.
     */
    create: XOR<librosCreateInput, librosUncheckedCreateInput>
    /**
     * In case the libros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<librosUpdateInput, librosUncheckedUpdateInput>
  }

  /**
   * libros delete
   */
  export type librosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
    /**
     * Filter which libros to delete.
     */
    where: librosWhereUniqueInput
  }

  /**
   * libros deleteMany
   */
  export type librosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which libros to delete
     */
    where?: librosWhereInput
    /**
     * Limit how many libros to delete.
     */
    limit?: number
  }

  /**
   * libros.prestamos
   */
  export type libros$prestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    where?: prestamosWhereInput
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    cursor?: prestamosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * libros without action
   */
  export type librosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libros
     */
    select?: librosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libros
     */
    omit?: librosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librosInclude<ExtArgs> | null
  }


  /**
   * Model prestamos
   */

  export type AggregatePrestamos = {
    _count: PrestamosCountAggregateOutputType | null
    _avg: PrestamosAvgAggregateOutputType | null
    _sum: PrestamosSumAggregateOutputType | null
    _min: PrestamosMinAggregateOutputType | null
    _max: PrestamosMaxAggregateOutputType | null
  }

  export type PrestamosAvgAggregateOutputType = {
    prestamo_id: number | null
    alumno_id: number | null
    libro_id: number | null
  }

  export type PrestamosSumAggregateOutputType = {
    prestamo_id: number | null
    alumno_id: number | null
    libro_id: number | null
  }

  export type PrestamosMinAggregateOutputType = {
    prestamo_id: number | null
    alumno_id: number | null
    libro_id: number | null
    fecha_prestamo: Date | null
    fecha_devolucion: Date | null
    estado: $Enums.prestamos_estado | null
  }

  export type PrestamosMaxAggregateOutputType = {
    prestamo_id: number | null
    alumno_id: number | null
    libro_id: number | null
    fecha_prestamo: Date | null
    fecha_devolucion: Date | null
    estado: $Enums.prestamos_estado | null
  }

  export type PrestamosCountAggregateOutputType = {
    prestamo_id: number
    alumno_id: number
    libro_id: number
    fecha_prestamo: number
    fecha_devolucion: number
    estado: number
    _all: number
  }


  export type PrestamosAvgAggregateInputType = {
    prestamo_id?: true
    alumno_id?: true
    libro_id?: true
  }

  export type PrestamosSumAggregateInputType = {
    prestamo_id?: true
    alumno_id?: true
    libro_id?: true
  }

  export type PrestamosMinAggregateInputType = {
    prestamo_id?: true
    alumno_id?: true
    libro_id?: true
    fecha_prestamo?: true
    fecha_devolucion?: true
    estado?: true
  }

  export type PrestamosMaxAggregateInputType = {
    prestamo_id?: true
    alumno_id?: true
    libro_id?: true
    fecha_prestamo?: true
    fecha_devolucion?: true
    estado?: true
  }

  export type PrestamosCountAggregateInputType = {
    prestamo_id?: true
    alumno_id?: true
    libro_id?: true
    fecha_prestamo?: true
    fecha_devolucion?: true
    estado?: true
    _all?: true
  }

  export type PrestamosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamos to aggregate.
     */
    where?: prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prestamos
    **/
    _count?: true | PrestamosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestamosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestamosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestamosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestamosMaxAggregateInputType
  }

  export type GetPrestamosAggregateType<T extends PrestamosAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestamos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestamos[P]>
      : GetScalarType<T[P], AggregatePrestamos[P]>
  }




  export type prestamosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamosWhereInput
    orderBy?: prestamosOrderByWithAggregationInput | prestamosOrderByWithAggregationInput[]
    by: PrestamosScalarFieldEnum[] | PrestamosScalarFieldEnum
    having?: prestamosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestamosCountAggregateInputType | true
    _avg?: PrestamosAvgAggregateInputType
    _sum?: PrestamosSumAggregateInputType
    _min?: PrestamosMinAggregateInputType
    _max?: PrestamosMaxAggregateInputType
  }

  export type PrestamosGroupByOutputType = {
    prestamo_id: number
    alumno_id: number
    libro_id: number
    fecha_prestamo: Date
    fecha_devolucion: Date | null
    estado: $Enums.prestamos_estado | null
    _count: PrestamosCountAggregateOutputType | null
    _avg: PrestamosAvgAggregateOutputType | null
    _sum: PrestamosSumAggregateOutputType | null
    _min: PrestamosMinAggregateOutputType | null
    _max: PrestamosMaxAggregateOutputType | null
  }

  type GetPrestamosGroupByPayload<T extends prestamosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestamosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestamosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestamosGroupByOutputType[P]>
            : GetScalarType<T[P], PrestamosGroupByOutputType[P]>
        }
      >
    >


  export type prestamosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prestamo_id?: boolean
    alumno_id?: boolean
    libro_id?: boolean
    fecha_prestamo?: boolean
    fecha_devolucion?: boolean
    estado?: boolean
    alumnos?: boolean | alumnosDefaultArgs<ExtArgs>
    libros?: boolean | librosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamos"]>



  export type prestamosSelectScalar = {
    prestamo_id?: boolean
    alumno_id?: boolean
    libro_id?: boolean
    fecha_prestamo?: boolean
    fecha_devolucion?: boolean
    estado?: boolean
  }

  export type prestamosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prestamo_id" | "alumno_id" | "libro_id" | "fecha_prestamo" | "fecha_devolucion" | "estado", ExtArgs["result"]["prestamos"]>
  export type prestamosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumnos?: boolean | alumnosDefaultArgs<ExtArgs>
    libros?: boolean | librosDefaultArgs<ExtArgs>
  }

  export type $prestamosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prestamos"
    objects: {
      alumnos: Prisma.$alumnosPayload<ExtArgs>
      libros: Prisma.$librosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prestamo_id: number
      alumno_id: number
      libro_id: number
      fecha_prestamo: Date
      fecha_devolucion: Date | null
      estado: $Enums.prestamos_estado | null
    }, ExtArgs["result"]["prestamos"]>
    composites: {}
  }

  type prestamosGetPayload<S extends boolean | null | undefined | prestamosDefaultArgs> = $Result.GetResult<Prisma.$prestamosPayload, S>

  type prestamosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prestamosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestamosCountAggregateInputType | true
    }

  export interface prestamosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prestamos'], meta: { name: 'prestamos' } }
    /**
     * Find zero or one Prestamos that matches the filter.
     * @param {prestamosFindUniqueArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prestamosFindUniqueArgs>(args: SelectSubset<T, prestamosFindUniqueArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestamos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prestamosFindUniqueOrThrowArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prestamosFindUniqueOrThrowArgs>(args: SelectSubset<T, prestamosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosFindFirstArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prestamosFindFirstArgs>(args?: SelectSubset<T, prestamosFindFirstArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosFindFirstOrThrowArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prestamosFindFirstOrThrowArgs>(args?: SelectSubset<T, prestamosFindFirstOrThrowArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestamos
     * const prestamos = await prisma.prestamos.findMany()
     * 
     * // Get first 10 Prestamos
     * const prestamos = await prisma.prestamos.findMany({ take: 10 })
     * 
     * // Only select the `prestamo_id`
     * const prestamosWithPrestamo_idOnly = await prisma.prestamos.findMany({ select: { prestamo_id: true } })
     * 
     */
    findMany<T extends prestamosFindManyArgs>(args?: SelectSubset<T, prestamosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestamos.
     * @param {prestamosCreateArgs} args - Arguments to create a Prestamos.
     * @example
     * // Create one Prestamos
     * const Prestamos = await prisma.prestamos.create({
     *   data: {
     *     // ... data to create a Prestamos
     *   }
     * })
     * 
     */
    create<T extends prestamosCreateArgs>(args: SelectSubset<T, prestamosCreateArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestamos.
     * @param {prestamosCreateManyArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamos = await prisma.prestamos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prestamosCreateManyArgs>(args?: SelectSubset<T, prestamosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prestamos.
     * @param {prestamosDeleteArgs} args - Arguments to delete one Prestamos.
     * @example
     * // Delete one Prestamos
     * const Prestamos = await prisma.prestamos.delete({
     *   where: {
     *     // ... filter to delete one Prestamos
     *   }
     * })
     * 
     */
    delete<T extends prestamosDeleteArgs>(args: SelectSubset<T, prestamosDeleteArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestamos.
     * @param {prestamosUpdateArgs} args - Arguments to update one Prestamos.
     * @example
     * // Update one Prestamos
     * const prestamos = await prisma.prestamos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prestamosUpdateArgs>(args: SelectSubset<T, prestamosUpdateArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestamos.
     * @param {prestamosDeleteManyArgs} args - Arguments to filter Prestamos to delete.
     * @example
     * // Delete a few Prestamos
     * const { count } = await prisma.prestamos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prestamosDeleteManyArgs>(args?: SelectSubset<T, prestamosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestamos
     * const prestamos = await prisma.prestamos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prestamosUpdateManyArgs>(args: SelectSubset<T, prestamosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prestamos.
     * @param {prestamosUpsertArgs} args - Arguments to update or create a Prestamos.
     * @example
     * // Update or create a Prestamos
     * const prestamos = await prisma.prestamos.upsert({
     *   create: {
     *     // ... data to create a Prestamos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestamos we want to update
     *   }
     * })
     */
    upsert<T extends prestamosUpsertArgs>(args: SelectSubset<T, prestamosUpsertArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosCountArgs} args - Arguments to filter Prestamos to count.
     * @example
     * // Count the number of Prestamos
     * const count = await prisma.prestamos.count({
     *   where: {
     *     // ... the filter for the Prestamos we want to count
     *   }
     * })
    **/
    count<T extends prestamosCountArgs>(
      args?: Subset<T, prestamosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestamosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrestamosAggregateArgs>(args: Subset<T, PrestamosAggregateArgs>): Prisma.PrismaPromise<GetPrestamosAggregateType<T>>

    /**
     * Group by Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosGroupByArgs} args - Group by arguments.
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
      T extends prestamosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prestamosGroupByArgs['orderBy'] }
        : { orderBy?: prestamosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, prestamosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prestamos model
   */
  readonly fields: prestamosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prestamos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prestamosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alumnos<T extends alumnosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, alumnosDefaultArgs<ExtArgs>>): Prisma__alumnosClient<$Result.GetResult<Prisma.$alumnosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    libros<T extends librosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, librosDefaultArgs<ExtArgs>>): Prisma__librosClient<$Result.GetResult<Prisma.$librosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the prestamos model
   */
  interface prestamosFieldRefs {
    readonly prestamo_id: FieldRef<"prestamos", 'Int'>
    readonly alumno_id: FieldRef<"prestamos", 'Int'>
    readonly libro_id: FieldRef<"prestamos", 'Int'>
    readonly fecha_prestamo: FieldRef<"prestamos", 'DateTime'>
    readonly fecha_devolucion: FieldRef<"prestamos", 'DateTime'>
    readonly estado: FieldRef<"prestamos", 'prestamos_estado'>
  }
    

  // Custom InputTypes
  /**
   * prestamos findUnique
   */
  export type prestamosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where: prestamosWhereUniqueInput
  }

  /**
   * prestamos findUniqueOrThrow
   */
  export type prestamosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where: prestamosWhereUniqueInput
  }

  /**
   * prestamos findFirst
   */
  export type prestamosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where?: prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamos.
     */
    cursor?: prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamos.
     */
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * prestamos findFirstOrThrow
   */
  export type prestamosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where?: prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamos.
     */
    cursor?: prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamos.
     */
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * prestamos findMany
   */
  export type prestamosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where?: prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prestamos.
     */
    cursor?: prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * prestamos create
   */
  export type prestamosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * The data needed to create a prestamos.
     */
    data: XOR<prestamosCreateInput, prestamosUncheckedCreateInput>
  }

  /**
   * prestamos createMany
   */
  export type prestamosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prestamos.
     */
    data: prestamosCreateManyInput | prestamosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prestamos update
   */
  export type prestamosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * The data needed to update a prestamos.
     */
    data: XOR<prestamosUpdateInput, prestamosUncheckedUpdateInput>
    /**
     * Choose, which prestamos to update.
     */
    where: prestamosWhereUniqueInput
  }

  /**
   * prestamos updateMany
   */
  export type prestamosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prestamos.
     */
    data: XOR<prestamosUpdateManyMutationInput, prestamosUncheckedUpdateManyInput>
    /**
     * Filter which prestamos to update
     */
    where?: prestamosWhereInput
    /**
     * Limit how many prestamos to update.
     */
    limit?: number
  }

  /**
   * prestamos upsert
   */
  export type prestamosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * The filter to search for the prestamos to update in case it exists.
     */
    where: prestamosWhereUniqueInput
    /**
     * In case the prestamos found by the `where` argument doesn't exist, create a new prestamos with this data.
     */
    create: XOR<prestamosCreateInput, prestamosUncheckedCreateInput>
    /**
     * In case the prestamos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prestamosUpdateInput, prestamosUncheckedUpdateInput>
  }

  /**
   * prestamos delete
   */
  export type prestamosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter which prestamos to delete.
     */
    where: prestamosWhereUniqueInput
  }

  /**
   * prestamos deleteMany
   */
  export type prestamosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamos to delete
     */
    where?: prestamosWhereInput
    /**
     * Limit how many prestamos to delete.
     */
    limit?: number
  }

  /**
   * prestamos without action
   */
  export type prestamosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    usuario_id: number | null
    estado_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    usuario_id: number | null
    estado_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    usuario_id: number | null
    nombre_usuario: string | null
    contrase_a: string | null
    email: string | null
    estado_usuario: number | null
    fecha_creacion_usuario: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    usuario_id: number | null
    nombre_usuario: string | null
    contrase_a: string | null
    email: string | null
    estado_usuario: number | null
    fecha_creacion_usuario: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    usuario_id: number
    nombre_usuario: number
    contrase_a: number
    email: number
    estado_usuario: number
    fecha_creacion_usuario: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    usuario_id?: true
    estado_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    usuario_id?: true
    estado_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    usuario_id?: true
    nombre_usuario?: true
    contrase_a?: true
    email?: true
    estado_usuario?: true
    fecha_creacion_usuario?: true
  }

  export type UsuariosMaxAggregateInputType = {
    usuario_id?: true
    nombre_usuario?: true
    contrase_a?: true
    email?: true
    estado_usuario?: true
    fecha_creacion_usuario?: true
  }

  export type UsuariosCountAggregateInputType = {
    usuario_id?: true
    nombre_usuario?: true
    contrase_a?: true
    email?: true
    estado_usuario?: true
    fecha_creacion_usuario?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    usuario_id: number
    nombre_usuario: string
    contrase_a: string
    email: string
    estado_usuario: number
    fecha_creacion_usuario: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    nombre_usuario?: boolean
    contrase_a?: boolean
    email?: boolean
    estado_usuario?: boolean
    fecha_creacion_usuario?: boolean
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    usuario_id?: boolean
    nombre_usuario?: boolean
    contrase_a?: boolean
    email?: boolean
    estado_usuario?: boolean
    fecha_creacion_usuario?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id" | "nombre_usuario" | "contrase_a" | "email" | "estado_usuario" | "fecha_creacion_usuario", ExtArgs["result"]["usuarios"]>

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: number
      nombre_usuario: string
      contrase_a: string
      email: string
      estado_usuario: number
      fecha_creacion_usuario: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const usuariosWithUsuario_idOnly = await prisma.usuarios.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly usuario_id: FieldRef<"usuarios", 'Int'>
    readonly nombre_usuario: FieldRef<"usuarios", 'String'>
    readonly contrase_a: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly estado_usuario: FieldRef<"usuarios", 'Int'>
    readonly fecha_creacion_usuario: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
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


  export const AlumnosScalarFieldEnum: {
    alumno_id: 'alumno_id',
    nombre: 'nombre',
    curso: 'curso',
    dni: 'dni'
  };

  export type AlumnosScalarFieldEnum = (typeof AlumnosScalarFieldEnum)[keyof typeof AlumnosScalarFieldEnum]


  export const LibrosScalarFieldEnum: {
    libro_id: 'libro_id',
    titulo: 'titulo',
    autor: 'autor',
    categoria: 'categoria',
    ejemplares_disponibles: 'ejemplares_disponibles'
  };

  export type LibrosScalarFieldEnum = (typeof LibrosScalarFieldEnum)[keyof typeof LibrosScalarFieldEnum]


  export const PrestamosScalarFieldEnum: {
    prestamo_id: 'prestamo_id',
    alumno_id: 'alumno_id',
    libro_id: 'libro_id',
    fecha_prestamo: 'fecha_prestamo',
    fecha_devolucion: 'fecha_devolucion',
    estado: 'estado'
  };

  export type PrestamosScalarFieldEnum = (typeof PrestamosScalarFieldEnum)[keyof typeof PrestamosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    usuario_id: 'usuario_id',
    nombre_usuario: 'nombre_usuario',
    contrase_a: 'contrase_a',
    email: 'email',
    estado_usuario: 'estado_usuario',
    fecha_creacion_usuario: 'fecha_creacion_usuario'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const alumnosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    curso: 'curso',
    dni: 'dni'
  };

  export type alumnosOrderByRelevanceFieldEnum = (typeof alumnosOrderByRelevanceFieldEnum)[keyof typeof alumnosOrderByRelevanceFieldEnum]


  export const librosOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    autor: 'autor',
    categoria: 'categoria'
  };

  export type librosOrderByRelevanceFieldEnum = (typeof librosOrderByRelevanceFieldEnum)[keyof typeof librosOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nombre_usuario: 'nombre_usuario',
    contrase_a: 'contrase_a',
    email: 'email'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'prestamos_estado'
   */
  export type Enumprestamos_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'prestamos_estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type alumnosWhereInput = {
    AND?: alumnosWhereInput | alumnosWhereInput[]
    OR?: alumnosWhereInput[]
    NOT?: alumnosWhereInput | alumnosWhereInput[]
    alumno_id?: IntFilter<"alumnos"> | number
    nombre?: StringFilter<"alumnos"> | string
    curso?: StringNullableFilter<"alumnos"> | string | null
    dni?: StringFilter<"alumnos"> | string
    prestamos?: PrestamosListRelationFilter
  }

  export type alumnosOrderByWithRelationInput = {
    alumno_id?: SortOrder
    nombre?: SortOrder
    curso?: SortOrderInput | SortOrder
    dni?: SortOrder
    prestamos?: prestamosOrderByRelationAggregateInput
    _relevance?: alumnosOrderByRelevanceInput
  }

  export type alumnosWhereUniqueInput = Prisma.AtLeast<{
    alumno_id?: number
    dni?: string
    AND?: alumnosWhereInput | alumnosWhereInput[]
    OR?: alumnosWhereInput[]
    NOT?: alumnosWhereInput | alumnosWhereInput[]
    nombre?: StringFilter<"alumnos"> | string
    curso?: StringNullableFilter<"alumnos"> | string | null
    prestamos?: PrestamosListRelationFilter
  }, "alumno_id" | "dni">

  export type alumnosOrderByWithAggregationInput = {
    alumno_id?: SortOrder
    nombre?: SortOrder
    curso?: SortOrderInput | SortOrder
    dni?: SortOrder
    _count?: alumnosCountOrderByAggregateInput
    _avg?: alumnosAvgOrderByAggregateInput
    _max?: alumnosMaxOrderByAggregateInput
    _min?: alumnosMinOrderByAggregateInput
    _sum?: alumnosSumOrderByAggregateInput
  }

  export type alumnosScalarWhereWithAggregatesInput = {
    AND?: alumnosScalarWhereWithAggregatesInput | alumnosScalarWhereWithAggregatesInput[]
    OR?: alumnosScalarWhereWithAggregatesInput[]
    NOT?: alumnosScalarWhereWithAggregatesInput | alumnosScalarWhereWithAggregatesInput[]
    alumno_id?: IntWithAggregatesFilter<"alumnos"> | number
    nombre?: StringWithAggregatesFilter<"alumnos"> | string
    curso?: StringNullableWithAggregatesFilter<"alumnos"> | string | null
    dni?: StringWithAggregatesFilter<"alumnos"> | string
  }

  export type librosWhereInput = {
    AND?: librosWhereInput | librosWhereInput[]
    OR?: librosWhereInput[]
    NOT?: librosWhereInput | librosWhereInput[]
    libro_id?: IntFilter<"libros"> | number
    titulo?: StringFilter<"libros"> | string
    autor?: StringFilter<"libros"> | string
    categoria?: StringNullableFilter<"libros"> | string | null
    ejemplares_disponibles?: IntFilter<"libros"> | number
    prestamos?: PrestamosListRelationFilter
  }

  export type librosOrderByWithRelationInput = {
    libro_id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    categoria?: SortOrderInput | SortOrder
    ejemplares_disponibles?: SortOrder
    prestamos?: prestamosOrderByRelationAggregateInput
    _relevance?: librosOrderByRelevanceInput
  }

  export type librosWhereUniqueInput = Prisma.AtLeast<{
    libro_id?: number
    AND?: librosWhereInput | librosWhereInput[]
    OR?: librosWhereInput[]
    NOT?: librosWhereInput | librosWhereInput[]
    titulo?: StringFilter<"libros"> | string
    autor?: StringFilter<"libros"> | string
    categoria?: StringNullableFilter<"libros"> | string | null
    ejemplares_disponibles?: IntFilter<"libros"> | number
    prestamos?: PrestamosListRelationFilter
  }, "libro_id">

  export type librosOrderByWithAggregationInput = {
    libro_id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    categoria?: SortOrderInput | SortOrder
    ejemplares_disponibles?: SortOrder
    _count?: librosCountOrderByAggregateInput
    _avg?: librosAvgOrderByAggregateInput
    _max?: librosMaxOrderByAggregateInput
    _min?: librosMinOrderByAggregateInput
    _sum?: librosSumOrderByAggregateInput
  }

  export type librosScalarWhereWithAggregatesInput = {
    AND?: librosScalarWhereWithAggregatesInput | librosScalarWhereWithAggregatesInput[]
    OR?: librosScalarWhereWithAggregatesInput[]
    NOT?: librosScalarWhereWithAggregatesInput | librosScalarWhereWithAggregatesInput[]
    libro_id?: IntWithAggregatesFilter<"libros"> | number
    titulo?: StringWithAggregatesFilter<"libros"> | string
    autor?: StringWithAggregatesFilter<"libros"> | string
    categoria?: StringNullableWithAggregatesFilter<"libros"> | string | null
    ejemplares_disponibles?: IntWithAggregatesFilter<"libros"> | number
  }

  export type prestamosWhereInput = {
    AND?: prestamosWhereInput | prestamosWhereInput[]
    OR?: prestamosWhereInput[]
    NOT?: prestamosWhereInput | prestamosWhereInput[]
    prestamo_id?: IntFilter<"prestamos"> | number
    alumno_id?: IntFilter<"prestamos"> | number
    libro_id?: IntFilter<"prestamos"> | number
    fecha_prestamo?: DateTimeFilter<"prestamos"> | Date | string
    fecha_devolucion?: DateTimeNullableFilter<"prestamos"> | Date | string | null
    estado?: Enumprestamos_estadoNullableFilter<"prestamos"> | $Enums.prestamos_estado | null
    alumnos?: XOR<AlumnosScalarRelationFilter, alumnosWhereInput>
    libros?: XOR<LibrosScalarRelationFilter, librosWhereInput>
  }

  export type prestamosOrderByWithRelationInput = {
    prestamo_id?: SortOrder
    alumno_id?: SortOrder
    libro_id?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    alumnos?: alumnosOrderByWithRelationInput
    libros?: librosOrderByWithRelationInput
  }

  export type prestamosWhereUniqueInput = Prisma.AtLeast<{
    prestamo_id?: number
    AND?: prestamosWhereInput | prestamosWhereInput[]
    OR?: prestamosWhereInput[]
    NOT?: prestamosWhereInput | prestamosWhereInput[]
    alumno_id?: IntFilter<"prestamos"> | number
    libro_id?: IntFilter<"prestamos"> | number
    fecha_prestamo?: DateTimeFilter<"prestamos"> | Date | string
    fecha_devolucion?: DateTimeNullableFilter<"prestamos"> | Date | string | null
    estado?: Enumprestamos_estadoNullableFilter<"prestamos"> | $Enums.prestamos_estado | null
    alumnos?: XOR<AlumnosScalarRelationFilter, alumnosWhereInput>
    libros?: XOR<LibrosScalarRelationFilter, librosWhereInput>
  }, "prestamo_id">

  export type prestamosOrderByWithAggregationInput = {
    prestamo_id?: SortOrder
    alumno_id?: SortOrder
    libro_id?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: prestamosCountOrderByAggregateInput
    _avg?: prestamosAvgOrderByAggregateInput
    _max?: prestamosMaxOrderByAggregateInput
    _min?: prestamosMinOrderByAggregateInput
    _sum?: prestamosSumOrderByAggregateInput
  }

  export type prestamosScalarWhereWithAggregatesInput = {
    AND?: prestamosScalarWhereWithAggregatesInput | prestamosScalarWhereWithAggregatesInput[]
    OR?: prestamosScalarWhereWithAggregatesInput[]
    NOT?: prestamosScalarWhereWithAggregatesInput | prestamosScalarWhereWithAggregatesInput[]
    prestamo_id?: IntWithAggregatesFilter<"prestamos"> | number
    alumno_id?: IntWithAggregatesFilter<"prestamos"> | number
    libro_id?: IntWithAggregatesFilter<"prestamos"> | number
    fecha_prestamo?: DateTimeWithAggregatesFilter<"prestamos"> | Date | string
    fecha_devolucion?: DateTimeNullableWithAggregatesFilter<"prestamos"> | Date | string | null
    estado?: Enumprestamos_estadoNullableWithAggregatesFilter<"prestamos"> | $Enums.prestamos_estado | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    usuario_id?: IntFilter<"usuarios"> | number
    nombre_usuario?: StringFilter<"usuarios"> | string
    contrase_a?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    estado_usuario?: IntFilter<"usuarios"> | number
    fecha_creacion_usuario?: DateTimeFilter<"usuarios"> | Date | string
  }

  export type usuariosOrderByWithRelationInput = {
    usuario_id?: SortOrder
    nombre_usuario?: SortOrder
    contrase_a?: SortOrder
    email?: SortOrder
    estado_usuario?: SortOrder
    fecha_creacion_usuario?: SortOrder
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: number
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre_usuario?: StringFilter<"usuarios"> | string
    contrase_a?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    estado_usuario?: IntFilter<"usuarios"> | number
    fecha_creacion_usuario?: DateTimeFilter<"usuarios"> | Date | string
  }, "usuario_id">

  export type usuariosOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    nombre_usuario?: SortOrder
    contrase_a?: SortOrder
    email?: SortOrder
    estado_usuario?: SortOrder
    fecha_creacion_usuario?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    usuario_id?: IntWithAggregatesFilter<"usuarios"> | number
    nombre_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    contrase_a?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    estado_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    fecha_creacion_usuario?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type alumnosCreateInput = {
    nombre: string
    curso?: string | null
    dni: string
    prestamos?: prestamosCreateNestedManyWithoutAlumnosInput
  }

  export type alumnosUncheckedCreateInput = {
    alumno_id?: number
    nombre: string
    curso?: string | null
    dni: string
    prestamos?: prestamosUncheckedCreateNestedManyWithoutAlumnosInput
  }

  export type alumnosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    prestamos?: prestamosUpdateManyWithoutAlumnosNestedInput
  }

  export type alumnosUncheckedUpdateInput = {
    alumno_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    prestamos?: prestamosUncheckedUpdateManyWithoutAlumnosNestedInput
  }

  export type alumnosCreateManyInput = {
    alumno_id?: number
    nombre: string
    curso?: string | null
    dni: string
  }

  export type alumnosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
  }

  export type alumnosUncheckedUpdateManyInput = {
    alumno_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
  }

  export type librosCreateInput = {
    titulo: string
    autor: string
    categoria?: string | null
    ejemplares_disponibles?: number
    prestamos?: prestamosCreateNestedManyWithoutLibrosInput
  }

  export type librosUncheckedCreateInput = {
    libro_id?: number
    titulo: string
    autor: string
    categoria?: string | null
    ejemplares_disponibles?: number
    prestamos?: prestamosUncheckedCreateNestedManyWithoutLibrosInput
  }

  export type librosUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ejemplares_disponibles?: IntFieldUpdateOperationsInput | number
    prestamos?: prestamosUpdateManyWithoutLibrosNestedInput
  }

  export type librosUncheckedUpdateInput = {
    libro_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ejemplares_disponibles?: IntFieldUpdateOperationsInput | number
    prestamos?: prestamosUncheckedUpdateManyWithoutLibrosNestedInput
  }

  export type librosCreateManyInput = {
    libro_id?: number
    titulo: string
    autor: string
    categoria?: string | null
    ejemplares_disponibles?: number
  }

  export type librosUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ejemplares_disponibles?: IntFieldUpdateOperationsInput | number
  }

  export type librosUncheckedUpdateManyInput = {
    libro_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ejemplares_disponibles?: IntFieldUpdateOperationsInput | number
  }

  export type prestamosCreateInput = {
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
    alumnos: alumnosCreateNestedOneWithoutPrestamosInput
    libros: librosCreateNestedOneWithoutPrestamosInput
  }

  export type prestamosUncheckedCreateInput = {
    prestamo_id?: number
    alumno_id: number
    libro_id: number
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
  }

  export type prestamosUpdateInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
    alumnos?: alumnosUpdateOneRequiredWithoutPrestamosNestedInput
    libros?: librosUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateInput = {
    prestamo_id?: IntFieldUpdateOperationsInput | number
    alumno_id?: IntFieldUpdateOperationsInput | number
    libro_id?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
  }

  export type prestamosCreateManyInput = {
    prestamo_id?: number
    alumno_id: number
    libro_id: number
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
  }

  export type prestamosUpdateManyMutationInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
  }

  export type prestamosUncheckedUpdateManyInput = {
    prestamo_id?: IntFieldUpdateOperationsInput | number
    alumno_id?: IntFieldUpdateOperationsInput | number
    libro_id?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
  }

  export type usuariosCreateInput = {
    nombre_usuario: string
    contrase_a: string
    email: string
    estado_usuario?: number
    fecha_creacion_usuario?: Date | string
  }

  export type usuariosUncheckedCreateInput = {
    usuario_id?: number
    nombre_usuario: string
    contrase_a: string
    email: string
    estado_usuario?: number
    fecha_creacion_usuario?: Date | string
  }

  export type usuariosUpdateInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateManyInput = {
    usuario_id?: number
    nombre_usuario: string
    contrase_a: string
    email: string
    estado_usuario?: number
    fecha_creacion_usuario?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PrestamosListRelationFilter = {
    every?: prestamosWhereInput
    some?: prestamosWhereInput
    none?: prestamosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type prestamosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type alumnosOrderByRelevanceInput = {
    fields: alumnosOrderByRelevanceFieldEnum | alumnosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type alumnosCountOrderByAggregateInput = {
    alumno_id?: SortOrder
    nombre?: SortOrder
    curso?: SortOrder
    dni?: SortOrder
  }

  export type alumnosAvgOrderByAggregateInput = {
    alumno_id?: SortOrder
  }

  export type alumnosMaxOrderByAggregateInput = {
    alumno_id?: SortOrder
    nombre?: SortOrder
    curso?: SortOrder
    dni?: SortOrder
  }

  export type alumnosMinOrderByAggregateInput = {
    alumno_id?: SortOrder
    nombre?: SortOrder
    curso?: SortOrder
    dni?: SortOrder
  }

  export type alumnosSumOrderByAggregateInput = {
    alumno_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type librosOrderByRelevanceInput = {
    fields: librosOrderByRelevanceFieldEnum | librosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type librosCountOrderByAggregateInput = {
    libro_id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    categoria?: SortOrder
    ejemplares_disponibles?: SortOrder
  }

  export type librosAvgOrderByAggregateInput = {
    libro_id?: SortOrder
    ejemplares_disponibles?: SortOrder
  }

  export type librosMaxOrderByAggregateInput = {
    libro_id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    categoria?: SortOrder
    ejemplares_disponibles?: SortOrder
  }

  export type librosMinOrderByAggregateInput = {
    libro_id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    categoria?: SortOrder
    ejemplares_disponibles?: SortOrder
  }

  export type librosSumOrderByAggregateInput = {
    libro_id?: SortOrder
    ejemplares_disponibles?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumprestamos_estadoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.prestamos_estado | Enumprestamos_estadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.prestamos_estado[] | null
    notIn?: $Enums.prestamos_estado[] | null
    not?: NestedEnumprestamos_estadoNullableFilter<$PrismaModel> | $Enums.prestamos_estado | null
  }

  export type AlumnosScalarRelationFilter = {
    is?: alumnosWhereInput
    isNot?: alumnosWhereInput
  }

  export type LibrosScalarRelationFilter = {
    is?: librosWhereInput
    isNot?: librosWhereInput
  }

  export type prestamosCountOrderByAggregateInput = {
    prestamo_id?: SortOrder
    alumno_id?: SortOrder
    libro_id?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrder
    estado?: SortOrder
  }

  export type prestamosAvgOrderByAggregateInput = {
    prestamo_id?: SortOrder
    alumno_id?: SortOrder
    libro_id?: SortOrder
  }

  export type prestamosMaxOrderByAggregateInput = {
    prestamo_id?: SortOrder
    alumno_id?: SortOrder
    libro_id?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrder
    estado?: SortOrder
  }

  export type prestamosMinOrderByAggregateInput = {
    prestamo_id?: SortOrder
    alumno_id?: SortOrder
    libro_id?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrder
    estado?: SortOrder
  }

  export type prestamosSumOrderByAggregateInput = {
    prestamo_id?: SortOrder
    alumno_id?: SortOrder
    libro_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumprestamos_estadoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.prestamos_estado | Enumprestamos_estadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.prestamos_estado[] | null
    notIn?: $Enums.prestamos_estado[] | null
    not?: NestedEnumprestamos_estadoNullableWithAggregatesFilter<$PrismaModel> | $Enums.prestamos_estado | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumprestamos_estadoNullableFilter<$PrismaModel>
    _max?: NestedEnumprestamos_estadoNullableFilter<$PrismaModel>
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    nombre_usuario?: SortOrder
    contrase_a?: SortOrder
    email?: SortOrder
    estado_usuario?: SortOrder
    fecha_creacion_usuario?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
    estado_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    nombre_usuario?: SortOrder
    contrase_a?: SortOrder
    email?: SortOrder
    estado_usuario?: SortOrder
    fecha_creacion_usuario?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    nombre_usuario?: SortOrder
    contrase_a?: SortOrder
    email?: SortOrder
    estado_usuario?: SortOrder
    fecha_creacion_usuario?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    usuario_id?: SortOrder
    estado_usuario?: SortOrder
  }

  export type prestamosCreateNestedManyWithoutAlumnosInput = {
    create?: XOR<prestamosCreateWithoutAlumnosInput, prestamosUncheckedCreateWithoutAlumnosInput> | prestamosCreateWithoutAlumnosInput[] | prestamosUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutAlumnosInput | prestamosCreateOrConnectWithoutAlumnosInput[]
    createMany?: prestamosCreateManyAlumnosInputEnvelope
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
  }

  export type prestamosUncheckedCreateNestedManyWithoutAlumnosInput = {
    create?: XOR<prestamosCreateWithoutAlumnosInput, prestamosUncheckedCreateWithoutAlumnosInput> | prestamosCreateWithoutAlumnosInput[] | prestamosUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutAlumnosInput | prestamosCreateOrConnectWithoutAlumnosInput[]
    createMany?: prestamosCreateManyAlumnosInputEnvelope
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type prestamosUpdateManyWithoutAlumnosNestedInput = {
    create?: XOR<prestamosCreateWithoutAlumnosInput, prestamosUncheckedCreateWithoutAlumnosInput> | prestamosCreateWithoutAlumnosInput[] | prestamosUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutAlumnosInput | prestamosCreateOrConnectWithoutAlumnosInput[]
    upsert?: prestamosUpsertWithWhereUniqueWithoutAlumnosInput | prestamosUpsertWithWhereUniqueWithoutAlumnosInput[]
    createMany?: prestamosCreateManyAlumnosInputEnvelope
    set?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    disconnect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    delete?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    update?: prestamosUpdateWithWhereUniqueWithoutAlumnosInput | prestamosUpdateWithWhereUniqueWithoutAlumnosInput[]
    updateMany?: prestamosUpdateManyWithWhereWithoutAlumnosInput | prestamosUpdateManyWithWhereWithoutAlumnosInput[]
    deleteMany?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type prestamosUncheckedUpdateManyWithoutAlumnosNestedInput = {
    create?: XOR<prestamosCreateWithoutAlumnosInput, prestamosUncheckedCreateWithoutAlumnosInput> | prestamosCreateWithoutAlumnosInput[] | prestamosUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutAlumnosInput | prestamosCreateOrConnectWithoutAlumnosInput[]
    upsert?: prestamosUpsertWithWhereUniqueWithoutAlumnosInput | prestamosUpsertWithWhereUniqueWithoutAlumnosInput[]
    createMany?: prestamosCreateManyAlumnosInputEnvelope
    set?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    disconnect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    delete?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    update?: prestamosUpdateWithWhereUniqueWithoutAlumnosInput | prestamosUpdateWithWhereUniqueWithoutAlumnosInput[]
    updateMany?: prestamosUpdateManyWithWhereWithoutAlumnosInput | prestamosUpdateManyWithWhereWithoutAlumnosInput[]
    deleteMany?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
  }

  export type prestamosCreateNestedManyWithoutLibrosInput = {
    create?: XOR<prestamosCreateWithoutLibrosInput, prestamosUncheckedCreateWithoutLibrosInput> | prestamosCreateWithoutLibrosInput[] | prestamosUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutLibrosInput | prestamosCreateOrConnectWithoutLibrosInput[]
    createMany?: prestamosCreateManyLibrosInputEnvelope
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
  }

  export type prestamosUncheckedCreateNestedManyWithoutLibrosInput = {
    create?: XOR<prestamosCreateWithoutLibrosInput, prestamosUncheckedCreateWithoutLibrosInput> | prestamosCreateWithoutLibrosInput[] | prestamosUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutLibrosInput | prestamosCreateOrConnectWithoutLibrosInput[]
    createMany?: prestamosCreateManyLibrosInputEnvelope
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
  }

  export type prestamosUpdateManyWithoutLibrosNestedInput = {
    create?: XOR<prestamosCreateWithoutLibrosInput, prestamosUncheckedCreateWithoutLibrosInput> | prestamosCreateWithoutLibrosInput[] | prestamosUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutLibrosInput | prestamosCreateOrConnectWithoutLibrosInput[]
    upsert?: prestamosUpsertWithWhereUniqueWithoutLibrosInput | prestamosUpsertWithWhereUniqueWithoutLibrosInput[]
    createMany?: prestamosCreateManyLibrosInputEnvelope
    set?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    disconnect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    delete?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    update?: prestamosUpdateWithWhereUniqueWithoutLibrosInput | prestamosUpdateWithWhereUniqueWithoutLibrosInput[]
    updateMany?: prestamosUpdateManyWithWhereWithoutLibrosInput | prestamosUpdateManyWithWhereWithoutLibrosInput[]
    deleteMany?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
  }

  export type prestamosUncheckedUpdateManyWithoutLibrosNestedInput = {
    create?: XOR<prestamosCreateWithoutLibrosInput, prestamosUncheckedCreateWithoutLibrosInput> | prestamosCreateWithoutLibrosInput[] | prestamosUncheckedCreateWithoutLibrosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutLibrosInput | prestamosCreateOrConnectWithoutLibrosInput[]
    upsert?: prestamosUpsertWithWhereUniqueWithoutLibrosInput | prestamosUpsertWithWhereUniqueWithoutLibrosInput[]
    createMany?: prestamosCreateManyLibrosInputEnvelope
    set?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    disconnect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    delete?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    update?: prestamosUpdateWithWhereUniqueWithoutLibrosInput | prestamosUpdateWithWhereUniqueWithoutLibrosInput[]
    updateMany?: prestamosUpdateManyWithWhereWithoutLibrosInput | prestamosUpdateManyWithWhereWithoutLibrosInput[]
    deleteMany?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
  }

  export type alumnosCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<alumnosCreateWithoutPrestamosInput, alumnosUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: alumnosCreateOrConnectWithoutPrestamosInput
    connect?: alumnosWhereUniqueInput
  }

  export type librosCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<librosCreateWithoutPrestamosInput, librosUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: librosCreateOrConnectWithoutPrestamosInput
    connect?: librosWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumprestamos_estadoFieldUpdateOperationsInput = {
    set?: $Enums.prestamos_estado | null
  }

  export type alumnosUpdateOneRequiredWithoutPrestamosNestedInput = {
    create?: XOR<alumnosCreateWithoutPrestamosInput, alumnosUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: alumnosCreateOrConnectWithoutPrestamosInput
    upsert?: alumnosUpsertWithoutPrestamosInput
    connect?: alumnosWhereUniqueInput
    update?: XOR<XOR<alumnosUpdateToOneWithWhereWithoutPrestamosInput, alumnosUpdateWithoutPrestamosInput>, alumnosUncheckedUpdateWithoutPrestamosInput>
  }

  export type librosUpdateOneRequiredWithoutPrestamosNestedInput = {
    create?: XOR<librosCreateWithoutPrestamosInput, librosUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: librosCreateOrConnectWithoutPrestamosInput
    upsert?: librosUpsertWithoutPrestamosInput
    connect?: librosWhereUniqueInput
    update?: XOR<XOR<librosUpdateToOneWithWhereWithoutPrestamosInput, librosUpdateWithoutPrestamosInput>, librosUncheckedUpdateWithoutPrestamosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumprestamos_estadoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.prestamos_estado | Enumprestamos_estadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.prestamos_estado[] | null
    notIn?: $Enums.prestamos_estado[] | null
    not?: NestedEnumprestamos_estadoNullableFilter<$PrismaModel> | $Enums.prestamos_estado | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumprestamos_estadoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.prestamos_estado | Enumprestamos_estadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.prestamos_estado[] | null
    notIn?: $Enums.prestamos_estado[] | null
    not?: NestedEnumprestamos_estadoNullableWithAggregatesFilter<$PrismaModel> | $Enums.prestamos_estado | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumprestamos_estadoNullableFilter<$PrismaModel>
    _max?: NestedEnumprestamos_estadoNullableFilter<$PrismaModel>
  }

  export type prestamosCreateWithoutAlumnosInput = {
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
    libros: librosCreateNestedOneWithoutPrestamosInput
  }

  export type prestamosUncheckedCreateWithoutAlumnosInput = {
    prestamo_id?: number
    libro_id: number
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
  }

  export type prestamosCreateOrConnectWithoutAlumnosInput = {
    where: prestamosWhereUniqueInput
    create: XOR<prestamosCreateWithoutAlumnosInput, prestamosUncheckedCreateWithoutAlumnosInput>
  }

  export type prestamosCreateManyAlumnosInputEnvelope = {
    data: prestamosCreateManyAlumnosInput | prestamosCreateManyAlumnosInput[]
    skipDuplicates?: boolean
  }

  export type prestamosUpsertWithWhereUniqueWithoutAlumnosInput = {
    where: prestamosWhereUniqueInput
    update: XOR<prestamosUpdateWithoutAlumnosInput, prestamosUncheckedUpdateWithoutAlumnosInput>
    create: XOR<prestamosCreateWithoutAlumnosInput, prestamosUncheckedCreateWithoutAlumnosInput>
  }

  export type prestamosUpdateWithWhereUniqueWithoutAlumnosInput = {
    where: prestamosWhereUniqueInput
    data: XOR<prestamosUpdateWithoutAlumnosInput, prestamosUncheckedUpdateWithoutAlumnosInput>
  }

  export type prestamosUpdateManyWithWhereWithoutAlumnosInput = {
    where: prestamosScalarWhereInput
    data: XOR<prestamosUpdateManyMutationInput, prestamosUncheckedUpdateManyWithoutAlumnosInput>
  }

  export type prestamosScalarWhereInput = {
    AND?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
    OR?: prestamosScalarWhereInput[]
    NOT?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
    prestamo_id?: IntFilter<"prestamos"> | number
    alumno_id?: IntFilter<"prestamos"> | number
    libro_id?: IntFilter<"prestamos"> | number
    fecha_prestamo?: DateTimeFilter<"prestamos"> | Date | string
    fecha_devolucion?: DateTimeNullableFilter<"prestamos"> | Date | string | null
    estado?: Enumprestamos_estadoNullableFilter<"prestamos"> | $Enums.prestamos_estado | null
  }

  export type prestamosCreateWithoutLibrosInput = {
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
    alumnos: alumnosCreateNestedOneWithoutPrestamosInput
  }

  export type prestamosUncheckedCreateWithoutLibrosInput = {
    prestamo_id?: number
    alumno_id: number
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
  }

  export type prestamosCreateOrConnectWithoutLibrosInput = {
    where: prestamosWhereUniqueInput
    create: XOR<prestamosCreateWithoutLibrosInput, prestamosUncheckedCreateWithoutLibrosInput>
  }

  export type prestamosCreateManyLibrosInputEnvelope = {
    data: prestamosCreateManyLibrosInput | prestamosCreateManyLibrosInput[]
    skipDuplicates?: boolean
  }

  export type prestamosUpsertWithWhereUniqueWithoutLibrosInput = {
    where: prestamosWhereUniqueInput
    update: XOR<prestamosUpdateWithoutLibrosInput, prestamosUncheckedUpdateWithoutLibrosInput>
    create: XOR<prestamosCreateWithoutLibrosInput, prestamosUncheckedCreateWithoutLibrosInput>
  }

  export type prestamosUpdateWithWhereUniqueWithoutLibrosInput = {
    where: prestamosWhereUniqueInput
    data: XOR<prestamosUpdateWithoutLibrosInput, prestamosUncheckedUpdateWithoutLibrosInput>
  }

  export type prestamosUpdateManyWithWhereWithoutLibrosInput = {
    where: prestamosScalarWhereInput
    data: XOR<prestamosUpdateManyMutationInput, prestamosUncheckedUpdateManyWithoutLibrosInput>
  }

  export type alumnosCreateWithoutPrestamosInput = {
    nombre: string
    curso?: string | null
    dni: string
  }

  export type alumnosUncheckedCreateWithoutPrestamosInput = {
    alumno_id?: number
    nombre: string
    curso?: string | null
    dni: string
  }

  export type alumnosCreateOrConnectWithoutPrestamosInput = {
    where: alumnosWhereUniqueInput
    create: XOR<alumnosCreateWithoutPrestamosInput, alumnosUncheckedCreateWithoutPrestamosInput>
  }

  export type librosCreateWithoutPrestamosInput = {
    titulo: string
    autor: string
    categoria?: string | null
    ejemplares_disponibles?: number
  }

  export type librosUncheckedCreateWithoutPrestamosInput = {
    libro_id?: number
    titulo: string
    autor: string
    categoria?: string | null
    ejemplares_disponibles?: number
  }

  export type librosCreateOrConnectWithoutPrestamosInput = {
    where: librosWhereUniqueInput
    create: XOR<librosCreateWithoutPrestamosInput, librosUncheckedCreateWithoutPrestamosInput>
  }

  export type alumnosUpsertWithoutPrestamosInput = {
    update: XOR<alumnosUpdateWithoutPrestamosInput, alumnosUncheckedUpdateWithoutPrestamosInput>
    create: XOR<alumnosCreateWithoutPrestamosInput, alumnosUncheckedCreateWithoutPrestamosInput>
    where?: alumnosWhereInput
  }

  export type alumnosUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: alumnosWhereInput
    data: XOR<alumnosUpdateWithoutPrestamosInput, alumnosUncheckedUpdateWithoutPrestamosInput>
  }

  export type alumnosUpdateWithoutPrestamosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
  }

  export type alumnosUncheckedUpdateWithoutPrestamosInput = {
    alumno_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
  }

  export type librosUpsertWithoutPrestamosInput = {
    update: XOR<librosUpdateWithoutPrestamosInput, librosUncheckedUpdateWithoutPrestamosInput>
    create: XOR<librosCreateWithoutPrestamosInput, librosUncheckedCreateWithoutPrestamosInput>
    where?: librosWhereInput
  }

  export type librosUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: librosWhereInput
    data: XOR<librosUpdateWithoutPrestamosInput, librosUncheckedUpdateWithoutPrestamosInput>
  }

  export type librosUpdateWithoutPrestamosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ejemplares_disponibles?: IntFieldUpdateOperationsInput | number
  }

  export type librosUncheckedUpdateWithoutPrestamosInput = {
    libro_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    ejemplares_disponibles?: IntFieldUpdateOperationsInput | number
  }

  export type prestamosCreateManyAlumnosInput = {
    prestamo_id?: number
    libro_id: number
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
  }

  export type prestamosUpdateWithoutAlumnosInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
    libros?: librosUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateWithoutAlumnosInput = {
    prestamo_id?: IntFieldUpdateOperationsInput | number
    libro_id?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
  }

  export type prestamosUncheckedUpdateManyWithoutAlumnosInput = {
    prestamo_id?: IntFieldUpdateOperationsInput | number
    libro_id?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
  }

  export type prestamosCreateManyLibrosInput = {
    prestamo_id?: number
    alumno_id: number
    fecha_prestamo: Date | string
    fecha_devolucion?: Date | string | null
    estado?: $Enums.prestamos_estado | null
  }

  export type prestamosUpdateWithoutLibrosInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
    alumnos?: alumnosUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateWithoutLibrosInput = {
    prestamo_id?: IntFieldUpdateOperationsInput | number
    alumno_id?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
  }

  export type prestamosUncheckedUpdateManyWithoutLibrosInput = {
    prestamo_id?: IntFieldUpdateOperationsInput | number
    alumno_id?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumprestamos_estadoFieldUpdateOperationsInput | $Enums.prestamos_estado | null
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