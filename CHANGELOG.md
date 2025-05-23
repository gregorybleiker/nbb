# Changelog

For a list of breaking changes, check [here](#breaking-changes).

- [#382](https://github.com/babashka/nbb/issues/382): Prefix all node imports with `node:`

[Nbb](https://github.com/babashka/nbb): Scripting in Clojure on Node.js using [SCI](https://github.com/babashka/sci)

## 1.3.198 (2025-04-27)

- [#379](https://github.com/babashka/nbb/issues/379): Support `:require` + `jsr:` dependencies in Deno

## 1.3.196 (2024-11-25)

- Add `locking` macro for compatibility with CLJS

## 1.3.195 (2024-11-07)

- [#343](https://github.com/babashka/nbb/issues/343): support `:reload` for reloading CLJS namespaces and JS code

## 1.3.194 (2024-10-23)

- Fix issue with loading `cljs.spec.alpha` by upgrading shadow-cljs

## 1.3.193 (2024-10-23)

- Include `cljs.spec.alpha`, `cljs.spec.gen.alpha`, `cljs.spec.test.alpha`

## 1.2.192 (2024-09-01)

- Make `promesa.core/do` exception safe

## 1.2.191

- Bump org.babashka/cli
- Bump SCI

## 1.2.190 (2024-06-28)

- Fix `cljs.pprint/print-table` + `with-out-str`

## 1.2.189 (2024-06-26)

- Fixed `cljs.test/testing` macro to display strings correctly on test failure ([@jaidetree](https://github.com/jaidetree))

## 1.2.188 (2024-04-17)

- nbb bundle JS output will ignore `nbb.edn`
- [#351](https://github.com/babashka/nbb/issues/351): Update bun docs/example.

## 1.2.187 (2024-03-04)

- Add `cljs.core/exists?`

## 1.2.182 (2024-02-12)

- Add `cljs.test/run-test` macro

## 1.2.180 (2024-01-29)

- Add cljs.core/Atom
- Add promesa `promesify`

## 1.2.179 (2023-10-05)

- Expose `sci.core` in nbb
- Expose `get-sci-ctx` in `nbb.core`

## 1.2.178

- More promesa fixes

## 1.2.177

- Bump sci.configs, adds promesa fixes/updates
- Fix problem in cljs.test reporter

## 1.2.176

- Bump sci.configs, fixes bug in `cljs.test/run-all-tests`

## 1.2.175

- [#330](https://github.com/babashka/nbb/issues/330): Update nREPL server to always have `println` to emit the final newline to nREPL clients even from inside async calls such as `js/setTimeout`.
- Bump sci.configs to include `promesa/timeout`
- Bump SCI

## 1.2.174

- [#323](https://github.com/babashka/nbb/issues/323): regression: `cljs.core/PersistentQueue.EMPTY` no longer works
- Remove offending but unused code for [bun](https://bun.sh)

## 1.2.173

- [#318](https://github.com/babashka/nbb/issues/318): fix `:local/root` deps in `nbb.edn` when not invoked from current directory

## 1.2.172

- [#95](https://github.com/babashka/nbb/issues/95): add `invoked-file`

## 1.2.171

- [#315](https://github.com/babashka/nbb/issues/315): support `:init` option in repl api

## 1.2.169 (2023-02-25)

- [#312](https://github.com/babashka/nbb/issues/312): same as [#311](https://github.com/babashka/nbb/issues/311) but with `$default`

## 1.2.168 (2023-02-24)

- [#311](https://github.com/babashka/nbb/issues/311): allow macro to resolve class via alias

## 1.2.167 (2023-02-24)

- [#297](https://github.com/babashka/nbb/issues/297): resolve `nbb.edn` relative to invoked script

## 1.2.165 (2023-02-24)

- [#309](https://github.com/babashka/nbb/issues/309): fix error when calling a macro which is referring to a js library symbol

## 1.2.164 (2023-02-24)

- [#201](https://github.com/babashka/nbb/issues/201): keyword arguments as map support

## 1.2.163 (2023-02-11)

- [#306](https://github.com/babashka/nbb/issues/306): nREPL server exits on evaluation error

## 1.2.162

- [#303](https://github.com/babashka/nbb/issues/303) nREPL server sends bad namespace value in eval responses.

## 1.2.161

- [#302](https://github.com/babashka/nbb/issues/302): top level `do` expressions did not allow non-seq? values
- Upgrade sci configs to `bf8d209e`

## 1.2.160

- [#300](https://github.com/babashka/nbb/issues/300): write `print-error-report` to `*print-err-fn*`

## 1.2.159

- [#296](https://github.com/babashka/nbb/discussions/296): expose pretty printing errors in JS. See [docs](https://github.com/babashka/nbb#printing-errors).

## 1.1.158

- [#294](https://github.com/babashka/nbb/issues/294): support multiple values in code input in nREPL eval message

## 1.1.157

- [#295](https://github.com/babashka/nbb/issues/295): add `swap-vals!` and `reset-vals!`

## 1.1.156

- [#292](https://github.com/babashka/nbb/issues/292): fix destructuring in multimethod
- Upgrade shadow-cljs

## 1.1.155

- Lazy load `cljs.pprint` for better startup time
- Update SCI: faster field access

## 1.1.153

- Upgrade SCI with performance improvements

## 1.1.152

- [#288](https://github.com/babashka/nbb/issues/288): escape regex when searching for completions in REPL

## 1.1.151 (2022-12-01)

- Add support for executing function using [babashka.cli](https://github.com/babashka/cli):

  nbb -x foo.bar/baz --flag --option 1

## 1.1.150 (2022-11-27)

- Downgrade shadow-cljs due to [#287](https://github.com/babashka/nbb/issues/287)

## 1.1.149 (2022-11-24)

- Add `cljs.pprint/cl-format`

## 1.1.148 (2022-11-23)

- Add `promesa.core/future`

## 1.1.147 (2022-11-21)

- Fix `package.json`

## 1.1.146 (2022-11-20)

- [#132](https://github.com/babashka/nbb/issues/132): Expose `nbb.nrepl-server` API

## 1.0.144 (2022-11-13)

- [#279](https://github.com/babashka/nbb/issues/279): fix regression: nbb no longer has current directory on classpath by default

## 1.0.142 (2022-11-03)

- [#274](https://github.com/babashka/nbb/issues/274): nbb.edn on Windows

## 1.0.141 (2022-11-02)

- [#272](https://github.com/babashka/nbb/issues/272): malli doesn't run in nbb 1.0.140 due to stackoverflow

## 1.0.140 (2022-11-01)

- [#270](https://github.com/babashka/nbb/issues/270): respect nbb.edn when starting nbb from JS API

## 1.0.139

- [#268](https://github.com/babashka/nbb/issues/268): Fix `:require-macros` (compatibility with [camel-snake-kebab](https://github.com/clj-commons/camel-snake-kebab))
- [#264](https://github.com/babashka/nbb/issues/264): make `load-file` auto-await

## 1.0.138

- Optimize `let` in SCI

## 1.0.137

- Add `clojure.zip`
- Add `IFn` for compatibility with `hickory.select`
- Add `nbbun` launcher for [Bun](https://github.com/oven-sh/bun)

## 1.0.136

- [#258](https://github.com/babashka/nbb/issues/258): improvements for loading namespaces and JS code asynchronously
- Fix compatibility with latest HoneySQL version
- Bump promesa to latest version and include promise-aware `doseq` macro

## 0.7.135

- [#256](https://github.com/babashka/nbb/issues/256): prefer loading package.json import over require (#257)

## 0.7.134

- [#246](https://github.com/babashka/nbb/issues/246): Support queue literal

## 0.7.133

- [#247](https://github.com/babashka/nbb/issues/247): Include remaining `goog.object` functions
- Respect `:paths` from `nbb.edn`
- [#253](https://github.com/babashka/nbb/issues/253): relative Javascript imports cached by "name", not by the resolved path
- [#252](https://github.com/babashka/nbb/issues/252): `IPrintWithWriter` support
- Add `type->str`

## 0.7.132

- Bump SCI, fixes [#242](https://github.com/babashka/nbb/issues/242) and [#244](https://github.com/babashka/nbb/issues/244) and adds `demunge` to `cljs.core`

## 0.7.131

- Support `:deps` in `nbb.edn` - thanks [@lilactown](https://github.com/lilactown)!
- Allow npm lib name in bundle to be configured with `$NBB_NPM_LIB_NAME`

## 0.6.129

- Malli compatibility

## 0.6.128

- More bundler fixes

## 0.6.127

- Fix [#239](https://github.com/babashka/nbb/issues/239): bundler with `--classpath`

## 0.6.126

- Another fix for [#234](https://github.com/babashka/nbb/issues/234)

## 0.6.125

- Fix [#219](https://github.com/babashka/nbb/issues/219): nbb doesn't resolve local node_modules when using the dynamic `js/import`
- Fix [#236](https://github.com/babashka/nbb/issues/236): also coerce set to bencode in nREPL
- Fix [#234](https://github.com/babashka/nbb/issues/234): cljs.test/assert-expr

## 0.6.124

- Fix [#136](https://github.com/babashka/nbb/issues/136): allow `set!` on any var

## 0.6.123

- Fix bundler problem with `reagent.core`

## 0.6.122

- Introduce [bundle](https://github.com/babashka/nbb/tree/main/doc/bundle) to
  make nbb projects work together with JS bundlers.

## 0.5.121

- Use `utf-8` encoding in `fs/readFile` for bun compatibility.

## 0.5.120

- Add `cljs.test/run-all-tests`

## 0.5.118

- Optimization in SCI: smaller advanced JS bundle
- Add `promesa.core/error`
- Temporarily roll back malli and schema support due to deployment difficulties

## 0.5.115

- Fix [#214](https://github.com/babashka/nbb/issues/214): add `reagent.core/adapt-react-class`
- Support `metosin/malli`

## 0.5.110

- Add support for `prismatic/schema`

## 0.5.104

- Fix [#207](https://github.com/babashka/nbb/issues/207): Requiring a local JS file is now relative to the current `.cljs` file

## 0.5.103

- Bump shadow-cljs and fix custom nbb builds
- Include `promesa.core/loop` and `recur`

## 0.5.102

- Fix [#190](https://github.com/babashka/nbb/issues/190): null namespace in completions

## 0.5.101

- Set exit code automatically based on failing `cljs.test` tests.
- Upgrade to ClojureScript 1.11.51. See [release
  notes](https://clojurescript.org/news/2022-05-13-release). This adds the
  additional core vars + the `cljs.math` namespace.

## 0.4.100

- nREPL improvements

## 0.3.99

- Fix [#187](https://github.com/babashka/nbb/issues/187): invalid arity with `are` macro (workaround for bug in CLJS)

## 0.3.98

- `nrepl-server` supports pprinting eval results

## 0.3.97

- `nrepl-server` supports `:host` parameter enabling connection within a Docker container.

## 0.3.96

- Add `goog.crypt`
- [#85](https://github.com/babashka/nbb/issues/85): set *1, *2, *3, *e in REPL

## 0.3.12

- Expose `edamame.core`

## 0.3.11

- Fix [#180](https://github.com/babashka/nbb/issues/180): namespace resolution in REPL

## 0.3.10

- Migrate features support to classpath approach
- Provide build bb library for building features
- Include `reagent.core/reactify-component`

## 0.3.9

- Include `clojure.data` as built-in dependency
- Add `datascript.core/squuid`
- Add support for different CLI name
- React improvements
- Support for [Raycast](doc/raycast/README.md).

## 0.3.8

- Nbb is now able to run [medley](https://github.com/weavejester/medley) from source

## 0.3.7

- Use `import-meta-resolve` to discover ES module files when `createRequire` doesn't find them.
  Fixes issue with loading newer version of `zx` (6.0.0+).

- Add optional datascript tests

## 0.3.6

- Allow `reagent.ratom` to be required separately

## 0.3.5

- Add initial features support with datascript and datascript-transit
- Include `cognitect.transit` as built-in dependency
- Add `clojure.pprint/print-table`

## 0.3.4

- Don't load modules more than once

## 0.3.3

- Fix [#158](https://github.com/babashka/nbb/issues/158): be able to use `cljs.test` as namespace name + support `:refer-macros`

## 0.3.2

- Fix [#154](https://github.com/babashka/nbb/issues/154): ignore `:require-macros`

## 0.3.1

- Fix [#139](https://github.com/babashka/nbb/issues/139): include `goog.string/format`
- Support `*print-err-fn*`

## 0.3.0

- Include `org.clojure/tools.cli` as built-in dependency.
- Update SCI to `0.3.3`

## 0.2.9

- Add `nbb.repl/get-completions` for `inf-clojure`

## 0.2.8

- Feat [#149](https://github.com/babashka/nbb/issues/149): Add auto-completions to normal REPL

## 0.2.7

- Support property access completions in nREPL server

## 0.2.6

- Fix [#146](https://github.com/babashka/nbb/issues/146): add JS completions for clojure functions in nREPL server

## 0.2.5

- Fix [#146](https://github.com/babashka/nbb/issues/146): add var completions for clojure functions in nREPL server

## 0.2.4

- Re-implement `require` via automatic `await`, allows conditional requires like: `(when foo? (require 'bar))`

## 0.2.3

- feat [#142](https://github.com/babashka/nbb/issues/142): experimental nbb.core/await

## 0.2.2

- Update SCI configs with `promesa/do` + `promesa/create`

## 0.2.1

- Bump SCI: drop location metadata from symbols, except top level

## 0.2.0

- Bump promesa for built-in clj-kondo config and `with-redefs` macro ([@niwinz](https://github.com/niwinz))
- Include new `with-redefs` macro ([@eccentric-j](https://github.com/eccentric-j))

## 0.1.9

- Fix [#135](https://github.com/babashka/nbb/issues/135): expose `promesa/run!`
- Fix [#131](https://github.com/babashka/nbb/issues/131): delayed printing in nREPL

## 0.1.8

- Fix bug: allow arbitrary expression in class position in `new` (part 2)

## 0.1.7

- Fix bug: allow arbitrary expression in class position in `new`
- Bump SCI
- Bump promesa for built-in clj-kondo config

## 0.1.6

- Show nbb version at REPL startup ([@prestancedesign](https://github.com/prestancedesign))
- Bump promesa with new `->` and `->>` macros ([@prestancedesign](https://github.com/prestancedesign))
- Bump SCI with performance improvements (4x) for loops

## 0.1.5

- Fix: use `Reflect.construct` to fix interop with Graal Node.js

## 0.1.4

- Fix [#118](https://github.com/babashka/nbb/issues/118): Use `Reflect.apply` to fix interop with Graal Node.js

## 0.1.3

- Support `:as-alias`

## 0.1.2

- Bump SCI and cljs-bean
- CIDER improvements ([@benjamin-asdf](https://github.com/benjamin-asdf))

## 0.1.1

- Fix [#115](https://github.com/babashka/nbb/issues/115): Missing `cljs.core` functions: `array?`, `object?`, `js-delete`, `undefined?`
- Fix [#114](https://github.com/babashka/nbb/issues/114): When non-Error values are thrown they aren't be caught by `:default`

## 0.1.0

- Add [cljs-bean](https://github.com/mfikes/cljs-bean) to ease JS interop
- Add `--help` option to print help text
- Add `--main` option to invoke main function

## 0.0.117

- Support binding `clojure.test/report` [#106](https://github.com/babashka/nbb/issues/106)

## 0.0.117

- Expose `Math` directly

## 0.0.113

- Add `tap` and related functions

## 0.0.112

- Expose more `promesa` functions

## 0.0.110

- Bump SCI

## 0.0.109

- Add `nbb.classpath` namespace and JS API for adding classpath entries

## 0.0.108

- Support `test-vars` and `use-fixtures` in `clojure.test` namespace
  [#99](https://github.com/babashka/nbb/issues/99)

## Breaking changes

None yet.
