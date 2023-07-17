# Changelog

## [3.1.1](https://github.com/Finch-API/finch-api-node/compare/v3.1.0...v3.1.1) (2023-07-17)


### Bug Fixes

* fix errors with "named" client export in CJS ([#80](https://github.com/Finch-API/finch-api-node/issues/80)) ([9ed2ab5](https://github.com/Finch-API/finch-api-node/commit/9ed2ab595f4a56b570a80b1e91cb77783dac33bb))


### Chores

* **internal:** add helper function for b64 ([#78](https://github.com/Finch-API/finch-api-node/issues/78)) ([1777d0f](https://github.com/Finch-API/finch-api-node/commit/1777d0f5ddccbdd8bd5dfddd825ccff26ad22236))
* **internal:** let `toFile` helper accept promises to objects with name/type properties ([#79](https://github.com/Finch-API/finch-api-node/issues/79)) ([cc800bb](https://github.com/Finch-API/finch-api-node/commit/cc800bb11a5e5d346a3829a5b0bc70ee72205fdc))
* **internal:** remove unused streaming implementation ([#76](https://github.com/Finch-API/finch-api-node/issues/76)) ([d4ab2eb](https://github.com/Finch-API/finch-api-node/commit/d4ab2eb249d9b625a70f4cc9389e1e4e0b0e4a60))

## [3.1.0](https://github.com/Finch-API/finch-api-node/compare/v3.0.0...v3.1.0) (2023-07-12)


### Features

* **client:** add support for passing a `signal` request option ([#73](https://github.com/Finch-API/finch-api-node/issues/73)) ([268e403](https://github.com/Finch-API/finch-api-node/commit/268e4039284a5375bddbfa2c7f1d8f24e38de781))
* **client:** improve timeout handling to reuse agent ([#66](https://github.com/Finch-API/finch-api-node/issues/66)) ([93f1971](https://github.com/Finch-API/finch-api-node/commit/93f197103c99051824fd124099098a91916b1ba7))
* **client:** support passing a custom `fetch` function ([#69](https://github.com/Finch-API/finch-api-node/issues/69)) ([7afb2cf](https://github.com/Finch-API/finch-api-node/commit/7afb2cf15e41b49709d3eac9cfde4ccefb7fc4de))


### Bug Fixes

* **client:** properly handle multi-byte characters in Content-Length ([#70](https://github.com/Finch-API/finch-api-node/issues/70)) ([0f3992a](https://github.com/Finch-API/finch-api-node/commit/0f3992ac0edbe72981c10643d3a2a34bb9d91326))
* fix errors in package source files when users go to definition in VSCode ([#65](https://github.com/Finch-API/finch-api-node/issues/65)) ([5df4494](https://github.com/Finch-API/finch-api-node/commit/5df4494a6753e3ed8b382857453f80080e5980c1))
* include README.md, LICENSE and CHANGELOG.md in published package ([#62](https://github.com/Finch-API/finch-api-node/issues/62)) ([349b3f4](https://github.com/Finch-API/finch-api-node/commit/349b3f4f20ff2e22faeb0b60999c3b49588a0d7c))
* **streaming:** do not abort successfully completed streams ([#72](https://github.com/Finch-API/finch-api-node/issues/72)) ([29c397c](https://github.com/Finch-API/finch-api-node/commit/29c397ce06489d280d844424bd429a21303e3156))
* **streaming:** fix response body streaming in non-Chrome environments ([#67](https://github.com/Finch-API/finch-api-node/issues/67)) ([6444271](https://github.com/Finch-API/finch-api-node/commit/6444271698ef127752a914ddb5dccd7a030fcfb2))
* **streaming:** polyfill ReadableStream async iterator and text decoding ([#61](https://github.com/Finch-API/finch-api-node/issues/61)) ([40d413d](https://github.com/Finch-API/finch-api-node/commit/40d413d7b50725bf6aae89c05b1d8b275899773c))
* support `PromiseLike` input to `toFile` ([#64](https://github.com/Finch-API/finch-api-node/issues/64)) ([8f3c827](https://github.com/Finch-API/finch-api-node/commit/8f3c827943205e2f43734106235794f6484d3724))


### Chores

* **internal:** fix release please version config ([#59](https://github.com/Finch-API/finch-api-node/issues/59)) ([dc04d72](https://github.com/Finch-API/finch-api-node/commit/dc04d72e5642986f47954853e2d915c6785a48bc))


### Refactors

* improve streaming implementation ([#63](https://github.com/Finch-API/finch-api-node/issues/63)) ([45fd9b8](https://github.com/Finch-API/finch-api-node/commit/45fd9b82c9f215405f496c63d7e42de035aab10e))
* **streaming:** make response body streaming polyfill more spec-compliant ([#68](https://github.com/Finch-API/finch-api-node/issues/68)) ([9ff63e7](https://github.com/Finch-API/finch-api-node/commit/9ff63e712647abb58deec5acfff033695b97465a))


### Documentation

* **readme:** minor improvements ([#71](https://github.com/Finch-API/finch-api-node/issues/71)) ([3cd7f5c](https://github.com/Finch-API/finch-api-node/commit/3cd7f5c809b574f1805d0b3b69596588827f6981))

## [3.0.0](https://github.com/Finch-API/finch-api-node/compare/v2.0.0...v3.0.0) (2023-07-07)


### ⚠ BREAKING CHANGES

* import issue with ESM ([#53](https://github.com/Finch-API/finch-api-node/issues/53))

### Features

* **client:** add support for `defaultQuery` option ([#51](https://github.com/Finch-API/finch-api-node/issues/51)) ([3c66c1a](https://github.com/Finch-API/finch-api-node/commit/3c66c1a8208e5ab9cf0521c6e58d105fdb653052))


### Bug Fixes

* import issue with ESM ([#53](https://github.com/Finch-API/finch-api-node/issues/53)) ([cbb7736](https://github.com/Finch-API/finch-api-node/commit/cbb7736e3080731a6c9b6876c4743ead625bbfd4))


### Styles

* add more whitespace ([#45](https://github.com/Finch-API/finch-api-node/issues/45)) ([5b8f0a6](https://github.com/Finch-API/finch-api-node/commit/5b8f0a682d866acd9bd2c3a12cb8a783065b166a))


### Refactors

* mark `.responseHeaders` and `.response` as deprecated ([#56](https://github.com/Finch-API/finch-api-node/issues/56)) ([30b93bc](https://github.com/Finch-API/finch-api-node/commit/30b93bcb85c1dd7ef2b1ac282d0e1c432cbc8136))
* move to src directory, improve ecosystem compatibility ([#49](https://github.com/Finch-API/finch-api-node/issues/49)) ([492a91a](https://github.com/Finch-API/finch-api-node/commit/492a91a5147a446b8a0ddc0c3d140dd4fdf372ab))


### Chores

* **internal:** fix tsc usage ([#55](https://github.com/Finch-API/finch-api-node/issues/55)) ([c74b4b0](https://github.com/Finch-API/finch-api-node/commit/c74b4b04096895ceb7e13a972a7dfa93c2f8bcfc))
* set `noEmit: true` in `tsconfig.json`, since it's for typechecking only ([#57](https://github.com/Finch-API/finch-api-node/issues/57)) ([430a6fc](https://github.com/Finch-API/finch-api-node/commit/430a6fc734c69adf2e9869abe2638c01b18e7a75))


### Documentation

* **api.md:** fix links not referencing `src` directory ([#52](https://github.com/Finch-API/finch-api-node/issues/52)) ([a243a2e](https://github.com/Finch-API/finch-api-node/commit/a243a2ea2dd7eb1a74a07fe1424d66cdb6c21dc0))
* **api.md:** minor restructuring ([#47](https://github.com/Finch-API/finch-api-node/issues/47)) ([cde08a6](https://github.com/Finch-API/finch-api-node/commit/cde08a68b7b6c3f7598f84e0017a2fa25a6019ad))
* **client:** improve documentation for client options ([#54](https://github.com/Finch-API/finch-api-node/issues/54)) ([0e6387b](https://github.com/Finch-API/finch-api-node/commit/0e6387b2946d717d4192099bcac45e0c20e34fa3))
* **readme:** fix typescript usage example response types ([#58](https://github.com/Finch-API/finch-api-node/issues/58)) ([365edfd](https://github.com/Finch-API/finch-api-node/commit/365edfdc7c5968aefaeee57a83246c5b84c897d8))

## [2.0.0](https://github.com/Finch-API/finch-api-node/compare/v1.1.0...v2.0.0) (2023-06-29)


### ⚠ BREAKING CHANGES

* **types:** singularize array item types ([#39](https://github.com/Finch-API/finch-api-node/issues/39))
* drop official support for EOL Node versions (Node 12, 13, 14, 15) ([#30](https://github.com/Finch-API/finch-api-node/issues/30))

### Features

* support ESM and web platform runtimes; easier file uploads ([#41](https://github.com/Finch-API/finch-api-node/issues/41)) ([a9de794](https://github.com/Finch-API/finch-api-node/commit/a9de794b0e67e2d2e743c47bbd5070f14cca5dae))
* **types:** export nested types through the root client export ([#38](https://github.com/Finch-API/finch-api-node/issues/38)) ([a524a6d](https://github.com/Finch-API/finch-api-node/commit/a524a6d301c5aaf58e1fe8c8fa818a4c17903506))


### Bug Fixes

* **form-data:** strip out undefined properties ([#36](https://github.com/Finch-API/finch-api-node/issues/36)) ([3263e7a](https://github.com/Finch-API/finch-api-node/commit/3263e7a61818e9ee3099659d9179e0b1818c6e6c))
* **internal:** improve stream cancellation handling of abort controllers ([#29](https://github.com/Finch-API/finch-api-node/issues/29)) ([a429beb](https://github.com/Finch-API/finch-api-node/commit/a429beb88a8283b675558b38249817107e0dc720))


### Build System

* add `.github` folder to `.npmignore` ([#31](https://github.com/Finch-API/finch-api-node/issues/31)) ([e354911](https://github.com/Finch-API/finch-api-node/commit/e354911b6c2c3189b047a3486daa17f6135293a7))


### Refactors

* move error type definitions to error.ts ([#28](https://github.com/Finch-API/finch-api-node/issues/28)) ([b102084](https://github.com/Finch-API/finch-api-node/commit/b102084e8f0dad200b78d9fb7812c359214585f8))
* **types:** singularize array item types ([#39](https://github.com/Finch-API/finch-api-node/issues/39)) ([b1e6ca9](https://github.com/Finch-API/finch-api-node/commit/b1e6ca908f7692e08e8259d1fe018b30af351777))


### Styles

* minor reordering of types and properties ([#42](https://github.com/Finch-API/finch-api-node/issues/42)) ([733d237](https://github.com/Finch-API/finch-api-node/commit/733d2372009be671f4c5d92af82c0103e7f4f54e))


### Chores

* **internal:** improve SSE decoding of lines ([#26](https://github.com/Finch-API/finch-api-node/issues/26)) ([a5c427e](https://github.com/Finch-API/finch-api-node/commit/a5c427e305faf75ebcb497ed731c23a48946b683))
* speed up build script slightly ([#43](https://github.com/Finch-API/finch-api-node/issues/43)) ([d407434](https://github.com/Finch-API/finch-api-node/commit/d40743443e5148c73fa89050c342144c6ee40ce9))


### Documentation

* drop official support for EOL Node versions (Node 12, 13, 14, 15) ([#30](https://github.com/Finch-API/finch-api-node/issues/30)) ([9ddd198](https://github.com/Finch-API/finch-api-node/commit/9ddd198dcfb273725f5be01f8935a765ed6d5ec0))
* **readme:** add note about updating the default version header ([#40](https://github.com/Finch-API/finch-api-node/issues/40)) ([1ca9421](https://github.com/Finch-API/finch-api-node/commit/1ca9421774c4c222c00e01b330ba4fcb8c68d329))
* **readme:** fix main example snippet ([#35](https://github.com/Finch-API/finch-api-node/issues/35)) ([4e84f2a](https://github.com/Finch-API/finch-api-node/commit/4e84f2a5ef5089d740d8c42e0df11450b02f4f0f))
* **readme:** update main example ([#33](https://github.com/Finch-API/finch-api-node/issues/33)) ([d38a664](https://github.com/Finch-API/finch-api-node/commit/d38a6649a868059c6a3080948e57545f55c92b32))
* rearrange sections in api.md ([#44](https://github.com/Finch-API/finch-api-node/issues/44)) ([da103bc](https://github.com/Finch-API/finch-api-node/commit/da103bce5a5716fb73f11d65ec0c1818c0f43ac4))

## [1.1.0](https://github.com/Finch-API/finch-api-node/compare/v1.0.0...v1.1.0) (2023-06-13)


### Features

* **client:** add support for specifying client-level default headers ([#19](https://github.com/Finch-API/finch-api-node/issues/19)) ([9dbd8ee](https://github.com/Finch-API/finch-api-node/commit/9dbd8ee4facd4298dbf295820b3b5539f8f12315))
* **client:** handle trailing slash in base url properly ([#16](https://github.com/Finch-API/finch-api-node/issues/16)) ([06d9f24](https://github.com/Finch-API/finch-api-node/commit/06d9f24b812336ed9673e678ce9f01f2dc952f7b))
* initial commit ([#1](https://github.com/Finch-API/finch-api-node/issues/1)) ([b4f5de4](https://github.com/Finch-API/finch-api-node/commit/b4f5de48f19520325dc847c5fa529ba0a28b430a))


### Bug Fixes

* **client:** properly expose `maxRetries` option ([#11](https://github.com/Finch-API/finch-api-node/issues/11)) ([4912955](https://github.com/Finch-API/finch-api-node/commit/491295582bd404f9f9a1fa7df1a35886edfef605))
* **sse:** handle server-sent events more robustly ([#17](https://github.com/Finch-API/finch-api-node/issues/17)) ([78720c8](https://github.com/Finch-API/finch-api-node/commit/78720c815d35ea88af10034f75807945699b4c4f))


### Chores

* **internal:** add empty request preparation method ([#18](https://github.com/Finch-API/finch-api-node/issues/18)) ([a648b84](https://github.com/Finch-API/finch-api-node/commit/a648b848164ad275938ba151b299147da314529f))
* **internal:** add prettierignore ([#14](https://github.com/Finch-API/finch-api-node/issues/14)) ([1a18a39](https://github.com/Finch-API/finch-api-node/commit/1a18a39944e295c9cb0bd91e49adac40ae103159))
* **internal:** fix workflow comment url ([#15](https://github.com/Finch-API/finch-api-node/issues/15)) ([d5a5a12](https://github.com/Finch-API/finch-api-node/commit/d5a5a128e95147270c01df951343db45dd0582fb))
* **internal:** improve NPM publish script ([#9](https://github.com/Finch-API/finch-api-node/issues/9)) ([#10](https://github.com/Finch-API/finch-api-node/issues/10)) ([305f5ec](https://github.com/Finch-API/finch-api-node/commit/305f5ece270c79b7f9817434f9913f213cb56bd1))
* **internal:** restructure core streaming implementation ([#20](https://github.com/Finch-API/finch-api-node/issues/20)) ([a3eca00](https://github.com/Finch-API/finch-api-node/commit/a3eca0079f386cc33d97517ae443614312d02349))
* **internal:** update changelog config ([#13](https://github.com/Finch-API/finch-api-node/issues/13)) ([8357f31](https://github.com/Finch-API/finch-api-node/commit/8357f31ef09647a5d803c6105cc85fc0ca0eb6f2))
* **internal:** updates to type formatting & remove duplicated types ([#21](https://github.com/Finch-API/finch-api-node/issues/21)) ([a70e092](https://github.com/Finch-API/finch-api-node/commit/a70e092b52ea7806ba9092688c206509062400c2))
* **internal:** use different package name ([5acb715](https://github.com/Finch-API/finch-api-node/commit/5acb71545b65837829475b18265bb9bf90827511))
* **main:** release finch-api 1.0.0 ([#8](https://github.com/Finch-API/finch-api-node/issues/8)) ([6350356](https://github.com/Finch-API/finch-api-node/commit/635035672bc1c358fb7765a43735d87dd15f7b65))


### Documentation

* point to github repo instead of email contact ([#25](https://github.com/Finch-API/finch-api-node/issues/25)) ([ed6595f](https://github.com/Finch-API/finch-api-node/commit/ed6595f6522b0c277bf8035e0f220bcb6843c129))

## 1.0.0 (2023-05-08)

### Features

- initial commit ([#1](https://github.com/Finch-API/finch-api-node/issues/1)) ([b4f5de4](https://github.com/Finch-API/finch-api-node/commit/b4f5de48f19520325dc847c5fa529ba0a28b430a))
