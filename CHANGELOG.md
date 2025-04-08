# Changelog

## 6.22.1 (2025-04-08)

Full Changelog: [v6.22.0...v6.22.1](https://github.com/Finch-API/finch-api-node/compare/v6.22.0...v6.22.1)

### Bug Fixes

* **client:** send all configured auth headers ([#594](https://github.com/Finch-API/finch-api-node/issues/594)) ([7e6bd40](https://github.com/Finch-API/finch-api-node/commit/7e6bd408cc700be14fc9102edce4376a94173082))
* **mcp:** point homepage and repo for mcp package to the `packages/mcp-server` directory ([#597](https://github.com/Finch-API/finch-api-node/issues/597)) ([b390a29](https://github.com/Finch-API/finch-api-node/commit/b390a29c4ebd70a577b8a19c5133b31813e9ed4a))
* **mcp:** remove unused tools.ts ([#592](https://github.com/Finch-API/finch-api-node/issues/592)) ([9a0678b](https://github.com/Finch-API/finch-api-node/commit/9a0678ba995037633567f626e0baff0da71f1298))


### Chores

* configure new SDK language ([#595](https://github.com/Finch-API/finch-api-node/issues/595)) ([d7219f0](https://github.com/Finch-API/finch-api-node/commit/d7219f0e80bd97dabfd602f103b3a1252364cb64))
* **internal:** codegen related update ([#593](https://github.com/Finch-API/finch-api-node/issues/593)) ([efa8229](https://github.com/Finch-API/finch-api-node/commit/efa82290cc6df930abd943e38f49d066ff7e9141))
* **internal:** improve index signature formatting ([#590](https://github.com/Finch-API/finch-api-node/issues/590)) ([2a5f375](https://github.com/Finch-API/finch-api-node/commit/2a5f3754f25d2f031a4992d00b595385d5c478a2))
* **tests:** improve enum examples ([#596](https://github.com/Finch-API/finch-api-node/issues/596)) ([87b29e3](https://github.com/Finch-API/finch-api-node/commit/87b29e3bd2abd6ecf8c82e47bfc031d31826cc5b))

## 6.22.0 (2025-04-04)

Full Changelog: [v6.21.0...v6.22.0](https://github.com/Finch-API/finch-api-node/compare/v6.21.0...v6.22.0)

### Features

* **api:** add new endpoints for pay statement items ([#587](https://github.com/Finch-API/finch-api-node/issues/587)) ([ad88cfc](https://github.com/Finch-API/finch-api-node/commit/ad88cfc51906f4e1dbfb04ccb5f80bb17a75a38b))
* **api:** api update ([#580](https://github.com/Finch-API/finch-api-node/issues/580)) ([6237aeb](https://github.com/Finch-API/finch-api-node/commit/6237aeb2de71a2c17beaae8cf891f70540f2140f))
* **api:** api update ([#582](https://github.com/Finch-API/finch-api-node/issues/582)) ([960a908](https://github.com/Finch-API/finch-api-node/commit/960a90821a90d244d5c09e0efe670826cfff4f57))
* **api:** api update ([#584](https://github.com/Finch-API/finch-api-node/issues/584)) ([3ee3c43](https://github.com/Finch-API/finch-api-node/commit/3ee3c43408504a8e90a4c6f7ef524bec87ec44cd))
* **api:** manual updates ([#588](https://github.com/Finch-API/finch-api-node/issues/588)) ([8608c19](https://github.com/Finch-API/finch-api-node/commit/8608c1996e2ab9e7136e9249b10be0cb61f166db))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#586](https://github.com/Finch-API/finch-api-node/issues/586)) ([a3b98cb](https://github.com/Finch-API/finch-api-node/commit/a3b98cb6044dd0079c2492f275f72852747e2ec2))
* **client:** send `X-Stainless-Timeout` in seconds ([#583](https://github.com/Finch-API/finch-api-node/issues/583)) ([880103a](https://github.com/Finch-API/finch-api-node/commit/880103a237bc6176ccec3990f172330bedf9f995))


### Chores

* **internal:** add aliases for Record and Array ([#585](https://github.com/Finch-API/finch-api-node/issues/585)) ([5356813](https://github.com/Finch-API/finch-api-node/commit/5356813545fcedcce376e5d9d6ecc71c86b12f9f))

## 6.21.0 (2025-03-31)

Full Changelog: [v6.20.0...v6.21.0](https://github.com/Finch-API/finch-api-node/compare/v6.20.0...v6.21.0)

### Features

* **api:** api update ([#577](https://github.com/Finch-API/finch-api-node/issues/577)) ([f0fbad5](https://github.com/Finch-API/finch-api-node/commit/f0fbad59ad2c2d5df0708b1eecf05bc895d9c664))

## 6.20.0 (2025-03-27)

Full Changelog: [v6.19.0...v6.20.0](https://github.com/Finch-API/finch-api-node/compare/v6.19.0...v6.20.0)

### Features

* **api:** api update ([#573](https://github.com/Finch-API/finch-api-node/issues/573)) ([3e564bb](https://github.com/Finch-API/finch-api-node/commit/3e564bb85fa7c7d5fb28f516168071ec995ddc86))


### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#575](https://github.com/Finch-API/finch-api-node/issues/575)) ([2704a24](https://github.com/Finch-API/finch-api-node/commit/2704a2435ed771eafcf00c87eb7938825744a078))

## 6.19.0 (2025-03-25)

Full Changelog: [v6.18.0...v6.19.0](https://github.com/Finch-API/finch-api-node/compare/v6.18.0...v6.19.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#563](https://github.com/Finch-API/finch-api-node/issues/563)) ([6126c8f](https://github.com/Finch-API/finch-api-node/commit/6126c8fbba873370e790eef7f00243d8d9569ad0))
* **api:** api update ([#571](https://github.com/Finch-API/finch-api-node/issues/571)) ([08f9158](https://github.com/Finch-API/finch-api-node/commit/08f915863ecb154a9fd83eb25e535eae2674039e))
* **api:** manual updates ([#560](https://github.com/Finch-API/finch-api-node/issues/560)) ([16949ae](https://github.com/Finch-API/finch-api-node/commit/16949aed1a201700c946b22b6cb923b03015e848))
* **client:** accept RFC6838 JSON content types ([#564](https://github.com/Finch-API/finch-api-node/issues/564)) ([a45d995](https://github.com/Finch-API/finch-api-node/commit/a45d995bcfacc0d1d48947842c0e4e71c52e50bc))


### Bug Fixes

* avoid type error in certain environments ([#570](https://github.com/Finch-API/finch-api-node/issues/570)) ([a8c7d8f](https://github.com/Finch-API/finch-api-node/commit/a8c7d8f232683cdbc9ed5bbdff257c147962c4da))
* **exports:** ensure resource imports don't require /index ([#567](https://github.com/Finch-API/finch-api-node/issues/567)) ([55a8d4a](https://github.com/Finch-API/finch-api-node/commit/55a8d4a9f2a8f2c5764fe496a5afa1147dfdf305))


### Chores

* **exports:** cleaner resource index imports ([#568](https://github.com/Finch-API/finch-api-node/issues/568)) ([3e5e7cf](https://github.com/Finch-API/finch-api-node/commit/3e5e7cfa673ecadd95f910944160179f46e573a7))
* **exports:** stop using path fallbacks ([#569](https://github.com/Finch-API/finch-api-node/issues/569)) ([4941288](https://github.com/Finch-API/finch-api-node/commit/49412884a2329dfdf66917673648db93250857d1))
* **internal:** codegen related update ([#562](https://github.com/Finch-API/finch-api-node/issues/562)) ([6c0cf0d](https://github.com/Finch-API/finch-api-node/commit/6c0cf0de15e4df4c7baf5601a385e2a9fc000a95))
* **internal:** codegen related update ([#565](https://github.com/Finch-API/finch-api-node/issues/565)) ([36a590e](https://github.com/Finch-API/finch-api-node/commit/36a590e5602ce8305dff53e1c37a4885574cf55f))
* **internal:** remove extra empty newlines ([#566](https://github.com/Finch-API/finch-api-node/issues/566)) ([f44dcf1](https://github.com/Finch-API/finch-api-node/commit/f44dcf1e88d46bb7bc1d95a2a7ce21b1cc9f4721))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#558](https://github.com/Finch-API/finch-api-node/issues/558)) ([2abb0ef](https://github.com/Finch-API/finch-api-node/commit/2abb0ef09caf75ba999c81f7d63beac6ebe9c44d))

## 6.18.0 (2025-02-27)

Full Changelog: [v6.17.0...v6.18.0](https://github.com/Finch-API/finch-api-node/compare/v6.17.0...v6.18.0)

### Features

* **api:** api update ([#555](https://github.com/Finch-API/finch-api-node/issues/555)) ([d59ff2a](https://github.com/Finch-API/finch-api-node/commit/d59ff2a78da71b1d162d4b42a31a51985e1f7f83))

## 6.17.0 (2025-02-26)

Full Changelog: [v6.16.1...v6.17.0](https://github.com/Finch-API/finch-api-node/compare/v6.16.1...v6.17.0)

### Features

* **api:** api update ([#553](https://github.com/Finch-API/finch-api-node/issues/553)) ([6c9709a](https://github.com/Finch-API/finch-api-node/commit/6c9709a5324b54287776fdc57c5bcd78d0a2a69a))


### Bug Fixes

* **client:** mark some request bodies as optional ([#551](https://github.com/Finch-API/finch-api-node/issues/551)) ([ebe7dc9](https://github.com/Finch-API/finch-api-node/commit/ebe7dc96ab5ab3b48e2fa89e3bb7e268508dc3eb))


### Chores

* **internal:** codegen related update ([#549](https://github.com/Finch-API/finch-api-node/issues/549)) ([be7e63d](https://github.com/Finch-API/finch-api-node/commit/be7e63d712ae5587aedec932618baf0e86e0f7d0))
* **internal:** fix devcontainers setup ([#552](https://github.com/Finch-API/finch-api-node/issues/552)) ([120d3f9](https://github.com/Finch-API/finch-api-node/commit/120d3f9a1dc51d643e52a9a16cae1a41bf074891))

## 6.16.1 (2025-02-11)

Full Changelog: [v6.16.0...v6.16.1](https://github.com/Finch-API/finch-api-node/compare/v6.16.0...v6.16.1)

### Chores

* **internal:** codegen related update ([#546](https://github.com/Finch-API/finch-api-node/issues/546)) ([923ccde](https://github.com/Finch-API/finch-api-node/commit/923ccde4a33601b168ccf37d5cdf223588266522))

## 6.16.0 (2025-02-04)

Full Changelog: [v6.15.1...v6.16.0](https://github.com/Finch-API/finch-api-node/compare/v6.15.1...v6.16.0)

### Features

* **api:** api update ([#538](https://github.com/Finch-API/finch-api-node/issues/538)) ([fea6ccc](https://github.com/Finch-API/finch-api-node/commit/fea6ccce9d001d4b420dc8aa784fd10922baf2bb))
* **api:** api update ([#541](https://github.com/Finch-API/finch-api-node/issues/541)) ([1cd0cc0](https://github.com/Finch-API/finch-api-node/commit/1cd0cc0c74b93480a73422a1b5932dcf0e7edd95))
* **api:** api update ([#542](https://github.com/Finch-API/finch-api-node/issues/542)) ([5623c7e](https://github.com/Finch-API/finch-api-node/commit/5623c7edf167d1c94f3f0ec13fa3fe35129d9236))
* **client:** send `X-Stainless-Timeout` header ([#544](https://github.com/Finch-API/finch-api-node/issues/544)) ([7ff39fc](https://github.com/Finch-API/finch-api-node/commit/7ff39fcff85fa3cc0887c918fa7d84672e257da1))


### Chores

* fix references to nested types ([#543](https://github.com/Finch-API/finch-api-node/issues/543)) ([6738165](https://github.com/Finch-API/finch-api-node/commit/6738165b6aafb8ab89425c1a9b372bbabfac954d))
* **internal:** codegen related update ([#540](https://github.com/Finch-API/finch-api-node/issues/540)) ([122a1a0](https://github.com/Finch-API/finch-api-node/commit/122a1a0aa85f3dce54ff56f9a291d34d69af024a))

## 6.15.1 (2025-01-21)

Full Changelog: [v6.15.0...v6.15.1](https://github.com/Finch-API/finch-api-node/compare/v6.15.0...v6.15.1)

### Chores

* **internal:** add test ([#535](https://github.com/Finch-API/finch-api-node/issues/535)) ([dbff05c](https://github.com/Finch-API/finch-api-node/commit/dbff05c0f375a75906a8ee472de6579fab40db24))
* **types:** add `| undefined` to client options properties ([#533](https://github.com/Finch-API/finch-api-node/issues/533)) ([4ceb638](https://github.com/Finch-API/finch-api-node/commit/4ceb638bbae80e7d91bc67d3262772c5db4ab7ad))


### Documentation

* update deprecation messages ([#536](https://github.com/Finch-API/finch-api-node/issues/536)) ([6fd8f63](https://github.com/Finch-API/finch-api-node/commit/6fd8f63479a70f2d36d28d29abca22f1e87615d0))

## 6.15.0 (2025-01-09)

Full Changelog: [v6.14.0...v6.15.0](https://github.com/Finch-API/finch-api-node/compare/v6.14.0...v6.15.0)

### Features

* **api:** api update ([#531](https://github.com/Finch-API/finch-api-node/issues/531)) ([bb259a7](https://github.com/Finch-API/finch-api-node/commit/bb259a788ba6bfd13370f4744d4cc29780c564f8))


### Chores

* **internal:** codegen related update ([#529](https://github.com/Finch-API/finch-api-node/issues/529)) ([4b8af11](https://github.com/Finch-API/finch-api-node/commit/4b8af11c968181a5cddd01c74de2c7f05984169f))

## 6.14.0 (2025-01-07)

Full Changelog: [v6.13.1...v6.14.0](https://github.com/Finch-API/finch-api-node/compare/v6.13.1...v6.14.0)

### Features

* **api:** manual updates ([#526](https://github.com/Finch-API/finch-api-node/issues/526)) ([6ad85a9](https://github.com/Finch-API/finch-api-node/commit/6ad85a950f9de33dd9976698a09e8be85bafae6b))

## 6.13.1 (2025-01-07)

Full Changelog: [v6.13.0...v6.13.1](https://github.com/Finch-API/finch-api-node/compare/v6.13.0...v6.13.1)

### Chores

* **internal:** codegen related update ([#522](https://github.com/Finch-API/finch-api-node/issues/522)) ([15d8731](https://github.com/Finch-API/finch-api-node/commit/15d873191eb0c6995c2befa7892f6beba71a4f3b))
* **types:** use `declare namespace` ([#524](https://github.com/Finch-API/finch-api-node/issues/524)) ([e748544](https://github.com/Finch-API/finch-api-node/commit/e7485447d89cca3d66a1ec8beb4210b50fceb81b))

## 6.13.0 (2024-12-20)

Full Changelog: [v6.12.0...v6.13.0](https://github.com/Finch-API/finch-api-node/compare/v6.12.0...v6.13.0)

### Features

* **api:** api update ([#509](https://github.com/Finch-API/finch-api-node/issues/509)) ([b69656b](https://github.com/Finch-API/finch-api-node/commit/b69656b9f5607f8a83d17386f39da112ddfe6afb))
* **api:** api update ([#512](https://github.com/Finch-API/finch-api-node/issues/512)) ([c688b2e](https://github.com/Finch-API/finch-api-node/commit/c688b2ec4ea1b85d023ba989b707679647811ad3))
* **api:** api update ([#515](https://github.com/Finch-API/finch-api-node/issues/515)) ([af26fff](https://github.com/Finch-API/finch-api-node/commit/af26fff051e4c89849d3243829bf8042e85048c0))
* **api:** api update ([#516](https://github.com/Finch-API/finch-api-node/issues/516)) ([5146110](https://github.com/Finch-API/finch-api-node/commit/51461105bfb204e10efa0603fa0fed0ef7fa4d2c))
* **api:** api update ([#517](https://github.com/Finch-API/finch-api-node/issues/517)) ([207b283](https://github.com/Finch-API/finch-api-node/commit/207b283a2a45665beed96d097f32565098165c23))


### Bug Fixes

* **client:** normalize method ([#519](https://github.com/Finch-API/finch-api-node/issues/519)) ([7775a51](https://github.com/Finch-API/finch-api-node/commit/7775a51a35717e8e3c93c16fcf6e2b246d9bba16))


### Chores

* **internal:** bump cross-spawn to v7.0.6 ([#511](https://github.com/Finch-API/finch-api-node/issues/511)) ([15b9f27](https://github.com/Finch-API/finch-api-node/commit/15b9f27e360f60e3ef1bd53194e8eff165ed8105))
* **internal:** codegen related update ([#507](https://github.com/Finch-API/finch-api-node/issues/507)) ([21bca96](https://github.com/Finch-API/finch-api-node/commit/21bca96783aca9c31e074acf263d2530c3601842))
* **internal:** fix some typos ([#518](https://github.com/Finch-API/finch-api-node/issues/518)) ([04729df](https://github.com/Finch-API/finch-api-node/commit/04729df6179681b142f2d2b4ce2222d680041609))
* **internal:** remove unnecessary getRequestClient function ([#510](https://github.com/Finch-API/finch-api-node/issues/510)) ([3f55469](https://github.com/Finch-API/finch-api-node/commit/3f55469efaf5c39ecbe42747d427efd2ed282682))
* **internal:** update isAbsoluteURL ([#514](https://github.com/Finch-API/finch-api-node/issues/514)) ([c280136](https://github.com/Finch-API/finch-api-node/commit/c28013697fd2752bab1f9b6af6b910186f36ec0a))
* **types:** nicer error class types + jsdocs ([#513](https://github.com/Finch-API/finch-api-node/issues/513)) ([e3e7e3f](https://github.com/Finch-API/finch-api-node/commit/e3e7e3fe52a2b0d6be4bcd27a6ec800df35325b7))


### Documentation

* minor formatting changes ([#520](https://github.com/Finch-API/finch-api-node/issues/520)) ([e3d6ebe](https://github.com/Finch-API/finch-api-node/commit/e3d6ebebd734e4066d344c0d9cff622aa1b808d7))

## 6.12.0 (2024-11-27)

Full Changelog: [v6.11.0...v6.12.0](https://github.com/Finch-API/finch-api-node/compare/v6.11.0...v6.12.0)

### Features

* **api:** api update ([#505](https://github.com/Finch-API/finch-api-node/issues/505)) ([d9d4f4d](https://github.com/Finch-API/finch-api-node/commit/d9d4f4d7768705cf139200b7009b764f3a2e2caf))
* **internal:** make git install file structure match npm ([#503](https://github.com/Finch-API/finch-api-node/issues/503)) ([469d7f7](https://github.com/Finch-API/finch-api-node/commit/469d7f7de6ebade28b319f18e3d8bf67b16b1a37))

## 6.11.0 (2024-11-25)

Full Changelog: [v6.10.2...v6.11.0](https://github.com/Finch-API/finch-api-node/compare/v6.10.2...v6.11.0)

### Features

* **client:** do not run in browser context unless explicitly asked ([#500](https://github.com/Finch-API/finch-api-node/issues/500)) ([d251bc6](https://github.com/Finch-API/finch-api-node/commit/d251bc6a0ffa8df8ecc39cd6d3fc8a846843720e))

## 6.10.2 (2024-11-20)

Full Changelog: [v6.10.1...v6.10.2](https://github.com/Finch-API/finch-api-node/compare/v6.10.1...v6.10.2)

### Bug Fixes

* **webhooks:** use @noble/hashes instead of crypto for signing ([#495](https://github.com/Finch-API/finch-api-node/issues/495)) ([6289374](https://github.com/Finch-API/finch-api-node/commit/6289374934db3bbca920eed1aa869950640830f7))

## 6.10.1 (2024-11-20)

Full Changelog: [v6.10.0...v6.10.1](https://github.com/Finch-API/finch-api-node/compare/v6.10.0...v6.10.1)

### Chores

* **internal:** version bump ([#491](https://github.com/Finch-API/finch-api-node/issues/491)) ([4691ffd](https://github.com/Finch-API/finch-api-node/commit/4691ffdf3edbe0dd9bdb05a26cf61d53ab8e25e5))
* **internal:** version bump ([#493](https://github.com/Finch-API/finch-api-node/issues/493)) ([857c1ff](https://github.com/Finch-API/finch-api-node/commit/857c1ffa9c05d0c39aab06a62fb8bca44faed41d))

## 6.10.0 (2024-11-19)

Full Changelog: [v6.9.0...v6.10.0](https://github.com/Finch-API/finch-api-node/compare/v6.9.0...v6.10.0)

### Features

* **api:** api update ([#487](https://github.com/Finch-API/finch-api-node/issues/487)) ([d80ca32](https://github.com/Finch-API/finch-api-node/commit/d80ca322379e315503c6bbe22991465347525b9a))


### Chores

* rebuild project due to codegen change ([#482](https://github.com/Finch-API/finch-api-node/issues/482)) ([789bea1](https://github.com/Finch-API/finch-api-node/commit/789bea197e2c03809e42b44710816f61a2b2bf94))
* rebuild project due to codegen change ([#484](https://github.com/Finch-API/finch-api-node/issues/484)) ([dabe1af](https://github.com/Finch-API/finch-api-node/commit/dabe1af68ae5bb2a129931e5061b24ab30c55878))
* rebuild project due to codegen change ([#485](https://github.com/Finch-API/finch-api-node/issues/485)) ([90c94e0](https://github.com/Finch-API/finch-api-node/commit/90c94e032577db2628350ead037837065d8db0d4))
* rebuild project due to codegen change ([#486](https://github.com/Finch-API/finch-api-node/issues/486)) ([34dcd1d](https://github.com/Finch-API/finch-api-node/commit/34dcd1d881b5a358b4007ee9b21c8fd0af9ea1b4))

## 6.9.0 (2024-11-01)

Full Changelog: [v6.8.0...v6.9.0](https://github.com/Finch-API/finch-api-node/compare/v6.8.0...v6.9.0)

### Features

* **api:** api update ([#479](https://github.com/Finch-API/finch-api-node/issues/479)) ([4c002ad](https://github.com/Finch-API/finch-api-node/commit/4c002ade0455843ac6952d39c9b13f88be36c47a))

## 6.8.0 (2024-10-23)

Full Changelog: [v6.7.0...v6.8.0](https://github.com/Finch-API/finch-api-node/compare/v6.7.0...v6.8.0)

### Features

* **api:** api update ([#475](https://github.com/Finch-API/finch-api-node/issues/475)) ([e5b9832](https://github.com/Finch-API/finch-api-node/commit/e5b983298f9fbf75e19d98dc022a346aee1a3a61))
* **api:** api update ([#477](https://github.com/Finch-API/finch-api-node/issues/477)) ([15a197a](https://github.com/Finch-API/finch-api-node/commit/15a197a1900d46479a474a930bbc619c313e7c39))

## 6.7.0 (2024-10-10)

Full Changelog: [v6.6.0...v6.7.0](https://github.com/Finch-API/finch-api-node/compare/v6.6.0...v6.7.0)

### Features

* **api:** api update ([#471](https://github.com/Finch-API/finch-api-node/issues/471)) ([a44dce6](https://github.com/Finch-API/finch-api-node/commit/a44dce636bca6e4523b2a440e34a6fc1b13a71cb))


### Bug Fixes

* **tests:** adjust to use basic auth ([0e42757](https://github.com/Finch-API/finch-api-node/commit/0e427577ca2c6d6cad48e551d71ea1e4f10c3aa8))

## 6.6.0 (2024-10-03)

Full Changelog: [v6.5.0...v6.6.0](https://github.com/Finch-API/finch-api-node/compare/v6.5.0...v6.6.0)

### Features

* **api:** Add connect sessions endpoints ([#463](https://github.com/Finch-API/finch-api-node/issues/463)) ([95be502](https://github.com/Finch-API/finch-api-node/commit/95be502e0843736a88ba36eb2b4e93870d77eff7))
* **api:** api update ([#468](https://github.com/Finch-API/finch-api-node/issues/468)) ([4cb1b50](https://github.com/Finch-API/finch-api-node/commit/4cb1b50846e41a2533a0eb2ed1b805a990680de0))
* **api:** manual updates ([#465](https://github.com/Finch-API/finch-api-node/issues/465)) ([3185de2](https://github.com/Finch-API/finch-api-node/commit/3185de23efd45b00525af140d7192e9c23d37dd8))
* **api:** manual updates ([#466](https://github.com/Finch-API/finch-api-node/issues/466)) ([0af0d80](https://github.com/Finch-API/finch-api-node/commit/0af0d805fc6f6d349f2277ea4fc03345d3311d13))
* **api:** OpenAPI spec update via Stainless API ([#455](https://github.com/Finch-API/finch-api-node/issues/455)) ([49f8211](https://github.com/Finch-API/finch-api-node/commit/49f8211d9fb5597ef5eb139f6c3183edf51e487a))
* **api:** OpenAPI spec update via Stainless API ([#462](https://github.com/Finch-API/finch-api-node/issues/462)) ([61f387c](https://github.com/Finch-API/finch-api-node/commit/61f387c92d1d86f36ef4467d412f231f6b1b55ed))


### Bug Fixes

* **tests:** add required clientId/clientSecret ([d1a8f2d](https://github.com/Finch-API/finch-api-node/commit/d1a8f2d56dbe68620e9f0395f86e6724b4c22992))


### Chores

* **internal:** add dev dependency ([#459](https://github.com/Finch-API/finch-api-node/issues/459)) ([3ae63ed](https://github.com/Finch-API/finch-api-node/commit/3ae63edc8fb7afa689aabbbf42390819e405f25d))
* **internal:** codegen related update ([#457](https://github.com/Finch-API/finch-api-node/issues/457)) ([3135a5d](https://github.com/Finch-API/finch-api-node/commit/3135a5d754001c1da3ca610846f5fc86e7d95f2b))
* **internal:** codegen related update ([#467](https://github.com/Finch-API/finch-api-node/issues/467)) ([b4ae8f1](https://github.com/Finch-API/finch-api-node/commit/b4ae8f1462a9386db5495f7b2e4909a641962350))
* **internal:** fix some types ([#461](https://github.com/Finch-API/finch-api-node/issues/461)) ([baea5ff](https://github.com/Finch-API/finch-api-node/commit/baea5ff10f68f18bb46e4d81bcfa1272a5701e61))
* **internal:** skip failing tests ([#464](https://github.com/Finch-API/finch-api-node/issues/464)) ([8fb5250](https://github.com/Finch-API/finch-api-node/commit/8fb525024ccc396561d1d7c6ea4e9c398272a339))


### Documentation

* update CONTRIBUTING.md ([#458](https://github.com/Finch-API/finch-api-node/issues/458)) ([020fcd4](https://github.com/Finch-API/finch-api-node/commit/020fcd4f3da93f7a6afcb237cb5a8165c4a309a2))

## 6.5.0 (2024-09-03)

Full Changelog: [v6.4.1...v6.5.0](https://github.com/Finch-API/finch-api-node/compare/v6.4.1...v6.5.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#452](https://github.com/Finch-API/finch-api-node/issues/452)) ([5215d71](https://github.com/Finch-API/finch-api-node/commit/5215d71799fca77eb6b8861c4c9b1bde967dd469))

## 6.4.1 (2024-09-03)

Full Changelog: [v6.4.0...v6.4.1](https://github.com/Finch-API/finch-api-node/compare/v6.4.0...v6.4.1)

### Bug Fixes

* **client:** correct File construction from node-fetch Responses ([#449](https://github.com/Finch-API/finch-api-node/issues/449)) ([29bd830](https://github.com/Finch-API/finch-api-node/commit/29bd83081f11a78d346bf82944eab4b8215c3b99))

## 6.4.0 (2024-08-30)

Full Changelog: [v6.3.0...v6.4.0](https://github.com/Finch-API/finch-api-node/compare/v6.3.0...v6.4.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#445](https://github.com/Finch-API/finch-api-node/issues/445)) ([e852d45](https://github.com/Finch-API/finch-api-node/commit/e852d45e0eeee556d9b9990cfdf20da09c02ece3))


### Chores

* **ci:** check for build errors ([#443](https://github.com/Finch-API/finch-api-node/issues/443)) ([c4939f3](https://github.com/Finch-API/finch-api-node/commit/c4939f393973e1f6100e638be9f0ddaedc2e3934))
* **ci:** install deps via ./script/bootstrap ([#447](https://github.com/Finch-API/finch-api-node/issues/447)) ([63bcd7d](https://github.com/Finch-API/finch-api-node/commit/63bcd7d7e372bf2e29a5cefd9cf8bf1848507f7e))
* run tsc as part of lint script ([#446](https://github.com/Finch-API/finch-api-node/issues/446)) ([9623ca4](https://github.com/Finch-API/finch-api-node/commit/9623ca41542e9110a17c050d20d2655c3ec3837f))

## 6.3.0 (2024-08-28)

Full Changelog: [v6.2.0...v6.3.0](https://github.com/Finch-API/finch-api-node/compare/v6.2.0...v6.3.0)

### Features

* chore: update reviewers for new teams ([#439](https://github.com/Finch-API/finch-api-node/issues/439)) ([a4dc6bd](https://github.com/Finch-API/finch-api-node/commit/a4dc6bdade0b379a482cd60a6b94fef18fcfdc08))

## 6.2.0 (2024-08-13)

Full Changelog: [v6.1.7...v6.2.0](https://github.com/Finch-API/finch-api-node/compare/v6.1.7...v6.2.0)

### Features

* **api:** update via SDK Studio ([#436](https://github.com/Finch-API/finch-api-node/issues/436)) ([f2f6954](https://github.com/Finch-API/finch-api-node/commit/f2f6954423427289debee78f3b42a23921e8a2d7))

## 6.1.7 (2024-08-12)

Full Changelog: [v6.1.6...v6.1.7](https://github.com/Finch-API/finch-api-node/compare/v6.1.6...v6.1.7)

### Chores

* **examples:** minor formatting changes ([#434](https://github.com/Finch-API/finch-api-node/issues/434)) ([d88888d](https://github.com/Finch-API/finch-api-node/commit/d88888d61b45227d5d1faeb43f06e3c4344aa28b))

## 6.1.6 (2024-08-09)

Full Changelog: [v6.1.5...v6.1.6](https://github.com/Finch-API/finch-api-node/compare/v6.1.5...v6.1.6)

### Chores

* **ci:** bump prism mock server version ([#432](https://github.com/Finch-API/finch-api-node/issues/432)) ([1cf1db0](https://github.com/Finch-API/finch-api-node/commit/1cf1db0614e740a653cc85f27822bd9d8151e6b2))

## 6.1.5 (2024-08-09)

Full Changelog: [v6.1.4...v6.1.5](https://github.com/Finch-API/finch-api-node/compare/v6.1.4...v6.1.5)

### Chores

* **ci:** minor changes ([#430](https://github.com/Finch-API/finch-api-node/issues/430)) ([d3016eb](https://github.com/Finch-API/finch-api-node/commit/d3016ebe1c4e1b94f996e7052882418404832a6d))

## 6.1.4 (2024-08-08)

Full Changelog: [v6.1.3...v6.1.4](https://github.com/Finch-API/finch-api-node/compare/v6.1.3...v6.1.4)

### Chores

* **internal:** updates ([#428](https://github.com/Finch-API/finch-api-node/issues/428)) ([e7224a2](https://github.com/Finch-API/finch-api-node/commit/e7224a289ef0a03624c640c7f0b72c2a3939630c))

## 6.1.3 (2024-08-01)

Full Changelog: [v6.1.2...v6.1.3](https://github.com/Finch-API/finch-api-node/compare/v6.1.2...v6.1.3)

### Chores

* 1.0.0 stable release ([#425](https://github.com/Finch-API/finch-api-node/issues/425)) ([d9993b1](https://github.com/Finch-API/finch-api-node/commit/d9993b120687d3a4c46b624baf4f82ba9d1eea18))
* stainless release ([#427](https://github.com/Finch-API/finch-api-node/issues/427)) ([0046eef](https://github.com/Finch-API/finch-api-node/commit/0046eefb39213d79e243f5e6d32ffc31c773bef0))

## 6.1.2 (2024-07-31)

Full Changelog: [v6.1.1...v6.1.2](https://github.com/Finch-API/finch-api-node/compare/v6.1.1...v6.1.2)

### Chores

* **ci:** correctly tag pre-release npm packages ([#423](https://github.com/Finch-API/finch-api-node/issues/423)) ([18a11dc](https://github.com/Finch-API/finch-api-node/commit/18a11dcd900ecdf692b6598990ba2614b25bb399))

## 6.1.1 (2024-07-29)

Full Changelog: [v6.1.0...v6.1.1](https://github.com/Finch-API/finch-api-node/compare/v6.1.0...v6.1.1)

### Chores

* **internal:** add constant for default timeout ([#421](https://github.com/Finch-API/finch-api-node/issues/421)) ([de2ded0](https://github.com/Finch-API/finch-api-node/commit/de2ded037f7e057668589633197ee125a180a8a0))

## 6.1.0 (2024-07-26)

Full Changelog: [v6.0.2...v6.1.0](https://github.com/Finch-API/finch-api-node/compare/v6.0.2...v6.1.0)

### Features

* **api:** add 'payment frequencies' and 'pay group ids' to payment model ([#420](https://github.com/Finch-API/finch-api-node/issues/420)) ([2d5eb58](https://github.com/Finch-API/finch-api-node/commit/2d5eb587254503a9b4329150823dde0ecb5938a5))


### Chores

* **docs:** fix incorrect client var names ([#418](https://github.com/Finch-API/finch-api-node/issues/418)) ([18d13b0](https://github.com/Finch-API/finch-api-node/commit/18d13b0b56b6daea83e2536f4370054df602ab1c))

## 6.0.2 (2024-07-25)

Full Changelog: [v6.0.1...v6.0.2](https://github.com/Finch-API/finch-api-node/compare/v6.0.1...v6.0.2)

### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#416](https://github.com/Finch-API/finch-api-node/issues/416)) ([bbbc6f4](https://github.com/Finch-API/finch-api-node/commit/bbbc6f49fa7941841ed899229761ba19d1101914))

## 6.0.1 (2024-07-23)

Full Changelog: [v6.0.0...v6.0.1](https://github.com/Finch-API/finch-api-node/compare/v6.0.0...v6.0.1)

### Bug Fixes

* use relative paths ([#414](https://github.com/Finch-API/finch-api-node/issues/414)) ([8766ead](https://github.com/Finch-API/finch-api-node/commit/8766ead3d55da0e093cc203cc0ae8e4da5417936))


### Chores

* **tests:** update prism version ([#412](https://github.com/Finch-API/finch-api-node/issues/412)) ([d0c775f](https://github.com/Finch-API/finch-api-node/commit/d0c775ff27891ea0eb724bc1564b9f1aba313f7c))

## 6.0.0 (2024-07-19)

Full Changelog: [v5.24.6...v6.0.0](https://github.com/Finch-API/finch-api-node/compare/v5.24.6...v6.0.0)

### ⚠ BREAKING CHANGES

* **api:** authentication method type is an enum, not a plain string ([#409](https://github.com/Finch-API/finch-api-node/issues/409))

### Bug Fixes

* **api:** authentication method type is an enum, not a plain string ([#409](https://github.com/Finch-API/finch-api-node/issues/409)) ([7faec13](https://github.com/Finch-API/finch-api-node/commit/7faec13318ac7d22c233e8b1082af3274177a95a))


### Chores

* **ci:** limit release doctor target branches ([#410](https://github.com/Finch-API/finch-api-node/issues/410)) ([e0fa95b](https://github.com/Finch-API/finch-api-node/commit/e0fa95b7993e18cf1abd04cd7dec7c42206dd08b))
* **docs:** improve docstrings ([#411](https://github.com/Finch-API/finch-api-node/issues/411)) ([c738d0c](https://github.com/Finch-API/finch-api-node/commit/c738d0c425bdeaefa03602de55dc1cf6db66954e))
* **docs:** use client instead of package name in Node examples ([#406](https://github.com/Finch-API/finch-api-node/issues/406)) ([c392bca](https://github.com/Finch-API/finch-api-node/commit/c392bca19d3c13f3d7ca38e728146221882233b2))

## 5.24.6 (2024-07-17)

Full Changelog: [v5.24.5...v5.24.6](https://github.com/Finch-API/finch-api-node/compare/v5.24.5...v5.24.6)

### Bug Fixes

* **api:** remove unused fields ([#401](https://github.com/Finch-API/finch-api-node/issues/401)) ([3ad92b3](https://github.com/Finch-API/finch-api-node/commit/3ad92b3a8357b34e137ae558cc7e5842d75fbce5))


### Chores

* **docs:** mention support of web browser runtimes ([#404](https://github.com/Finch-API/finch-api-node/issues/404)) ([46c211c](https://github.com/Finch-API/finch-api-node/commit/46c211cddc68b351fd801f1bed03fded8a89cd89))
* **docs:** minor update to formatting of API link in README ([#403](https://github.com/Finch-API/finch-api-node/issues/403)) ([09dda49](https://github.com/Finch-API/finch-api-node/commit/09dda49a1046fea01547a431abf7b6c56048cd40))
* **internal:** codegen related update ([#405](https://github.com/Finch-API/finch-api-node/issues/405)) ([4281cc6](https://github.com/Finch-API/finch-api-node/commit/4281cc6b33526ea16ddf9a93c81415078061aacb))

## 5.24.5 (2024-07-11)

Full Changelog: [v5.24.4...v5.24.5](https://github.com/Finch-API/finch-api-node/compare/v5.24.4...v5.24.5)

### Chores

* **ci:** also run workflows for PRs targeting `next` ([#398](https://github.com/Finch-API/finch-api-node/issues/398)) ([0ff02b9](https://github.com/Finch-API/finch-api-node/commit/0ff02b995f8defa751ae21c5746811e45cfef893))


### Documentation

* **examples:** update example values ([#400](https://github.com/Finch-API/finch-api-node/issues/400)) ([3f659b9](https://github.com/Finch-API/finch-api-node/commit/3f659b9e5d24e531294aa8bc91746334d472ea7a))

## 5.24.4 (2024-07-01)

Full Changelog: [v5.24.3...v5.24.4](https://github.com/Finch-API/finch-api-node/compare/v5.24.3...v5.24.4)

### Chores

* sync openapi spec ([#396](https://github.com/Finch-API/finch-api-node/issues/396)) ([6571ba1](https://github.com/Finch-API/finch-api-node/commit/6571ba1476f115af8add7f187053cdc37e9d020c))

## 5.24.3 (2024-06-28)

Full Changelog: [v5.24.2...v5.24.3](https://github.com/Finch-API/finch-api-node/compare/v5.24.2...v5.24.3)

### Chores

* gitignore test server logs ([#394](https://github.com/Finch-API/finch-api-node/issues/394)) ([a49b018](https://github.com/Finch-API/finch-api-node/commit/a49b0181eef5915133ccea79e327ea37bf7001ae))

## 5.24.2 (2024-06-25)

Full Changelog: [v5.24.1...v5.24.2](https://github.com/Finch-API/finch-api-node/compare/v5.24.1...v5.24.2)

### Chores

* **internal:** minor reformatting ([#392](https://github.com/Finch-API/finch-api-node/issues/392)) ([8097a38](https://github.com/Finch-API/finch-api-node/commit/8097a38682d6fd8edd27e25298fd9a3c981b1b33))

## 5.24.1 (2024-06-18)

Full Changelog: [v5.24.0...v5.24.1](https://github.com/Finch-API/finch-api-node/compare/v5.24.0...v5.24.1)

### Chores

* **deps:** bump braces from 3.0.2 to 3.0.3 ([784423d](https://github.com/Finch-API/finch-api-node/commit/784423dc4745db3eb4530c2ec7c96808e8720013))

## 5.24.0 (2024-06-10)

Full Changelog: [v5.23.1...v5.24.0](https://github.com/Finch-API/finch-api-node/compare/v5.23.1...v5.24.0)

### Features

* support `application/octet-stream` request bodies ([#388](https://github.com/Finch-API/finch-api-node/issues/388)) ([29a9339](https://github.com/Finch-API/finch-api-node/commit/29a9339da380b1f8289f0b2ecce283a0919ff4ec))

## 5.23.1 (2024-06-07)

Full Changelog: [v5.23.0...v5.23.1](https://github.com/Finch-API/finch-api-node/compare/v5.23.0...v5.23.1)

### Bug Fixes

* rename pay groups endpoint ([#386](https://github.com/Finch-API/finch-api-node/issues/386)) ([4936a68](https://github.com/Finch-API/finch-api-node/commit/4936a68fd4d93c1bc3e9e08cf97e3637ccf8ab4d))

## 5.23.0 (2024-06-06)

Full Changelog: [v5.22.12...v5.23.0](https://github.com/Finch-API/finch-api-node/compare/v5.22.12...v5.23.0)

### Features

* **api:** updates ([#384](https://github.com/Finch-API/finch-api-node/issues/384)) ([226caaa](https://github.com/Finch-API/finch-api-node/commit/226caaad82bb510655021cb1b738d77b0a3d0ea1))

## 5.22.12 (2024-05-31)

Full Changelog: [v5.22.11...v5.22.12](https://github.com/Finch-API/finch-api-node/compare/v5.22.11...v5.22.12)

### Bug Fixes

* allow git imports for pnpm ([#382](https://github.com/Finch-API/finch-api-node/issues/382)) ([b95f1d5](https://github.com/Finch-API/finch-api-node/commit/b95f1d5ab89aa15d0a5529fbf57340bcaa5c9de1))

## 5.22.11 (2024-05-28)

Full Changelog: [v5.22.10...v5.22.11](https://github.com/Finch-API/finch-api-node/compare/v5.22.10...v5.22.11)

### Documentation

* **readme:** add bundle size badge ([#380](https://github.com/Finch-API/finch-api-node/issues/380)) ([6cae00a](https://github.com/Finch-API/finch-api-node/commit/6cae00a925c9dda3d4eb289d6ea78c87b3f80c33))

## 5.22.10 (2024-05-25)

Full Changelog: [v5.22.9...v5.22.10](https://github.com/Finch-API/finch-api-node/compare/v5.22.9...v5.22.10)

### Bug Fixes

* fix bug access tokens create should set the authorization header to null ([4eb197e](https://github.com/Finch-API/finch-api-node/commit/4eb197e7e886a1a6c3a951a53a600d8d0db2c708))
* fix lint issue ([a240b14](https://github.com/Finch-API/finch-api-node/commit/a240b1416ed9bb798c079ca4262ed62848604a4f))

## 5.22.9 (2024-05-24)

Full Changelog: [v5.22.8...v5.22.9](https://github.com/Finch-API/finch-api-node/compare/v5.22.8...v5.22.9)

### Bug Fixes

* **api:** correct authentication methods type ([#370](https://github.com/Finch-API/finch-api-node/issues/370)) ([98a5860](https://github.com/Finch-API/finch-api-node/commit/98a5860e2434fe478f1fa2b7dabf7db1a40bdbda))
* **tests:** replace outdated example values ([3554d3f](https://github.com/Finch-API/finch-api-node/commit/3554d3fbe3d1f6f92f07339e79a60f1e2f81bf2b))
* **types:** correct index signature type ([#376](https://github.com/Finch-API/finch-api-node/issues/376)) ([5321060](https://github.com/Finch-API/finch-api-node/commit/5321060b3ec4899cd1aa53a1fa4df7e2b6666064))


### Chores

* **docs:** add SECURITY.md ([#366](https://github.com/Finch-API/finch-api-node/issues/366)) ([bf1afea](https://github.com/Finch-API/finch-api-node/commit/bf1afead23076a071970e170d65dcea9a4ab3517))
* **internal:** add slightly better logging to scripts ([#372](https://github.com/Finch-API/finch-api-node/issues/372)) ([84de6c1](https://github.com/Finch-API/finch-api-node/commit/84de6c1226235041fe50455dfb89cbff1ca4fbd8))
* **internal:** minor updates ([#369](https://github.com/Finch-API/finch-api-node/issues/369)) ([98d4f39](https://github.com/Finch-API/finch-api-node/commit/98d4f3971e15433d613f2e07adb3575cf5cd5366))
* **internal:** remove empty file ([c199638](https://github.com/Finch-API/finch-api-node/commit/c1996384384c9ba6085b78732801851b116b2edd))
* **internal:** resolve spec formatting issue ([#375](https://github.com/Finch-API/finch-api-node/issues/375)) ([c102ea6](https://github.com/Finch-API/finch-api-node/commit/c102ea6e9fedd347850d5f382d613c8f3818b6d2))
* **tests:** example client_id ([#377](https://github.com/Finch-API/finch-api-node/issues/377)) ([4d21a7a](https://github.com/Finch-API/finch-api-node/commit/4d21a7afff7456a5e9a24e6ba5ba64bd1c8af0e5))
* **tests:** update client ID example value ([#371](https://github.com/Finch-API/finch-api-node/issues/371)) ([bf3aac1](https://github.com/Finch-API/finch-api-node/commit/bf3aac155b19f0e009cf679fcc877e56557d487f))
* **tests:** update some example values ([#374](https://github.com/Finch-API/finch-api-node/issues/374)) ([d469723](https://github.com/Finch-API/finch-api-node/commit/d469723be418afe661fbb967a3cd01acb54def2c))

## 5.22.8 (2024-05-03)

Full Changelog: [v5.22.7...v5.22.8](https://github.com/Finch-API/finch-api-node/compare/v5.22.7...v5.22.8)

### Bug Fixes

* **package:** revert recent client file change ([#362](https://github.com/Finch-API/finch-api-node/issues/362)) ([97d9b40](https://github.com/Finch-API/finch-api-node/commit/97d9b40534535f673b993d8da1d5f35f7ff7428e))

## 5.22.7 (2024-05-02)

Full Changelog: [v5.22.6...v5.22.7](https://github.com/Finch-API/finch-api-node/compare/v5.22.6...v5.22.7)

### Bug Fixes

* **package:** add exports back in ([231a9a7](https://github.com/Finch-API/finch-api-node/commit/231a9a772d543d6a9d4e1b4411bb6ad06a615aa7))

## 5.22.6 (2024-05-02)

Full Changelog: [v5.22.5...v5.22.6](https://github.com/Finch-API/finch-api-node/compare/v5.22.5...v5.22.6)

### Chores

* **internal:** move client class to separate file ([#357](https://github.com/Finch-API/finch-api-node/issues/357)) ([a8ea8e2](https://github.com/Finch-API/finch-api-node/commit/a8ea8e2891c40ea9c19b2ccca32024dd93612a8a))

## 5.22.5 (2024-05-01)

Full Changelog: [v5.22.4...v5.22.5](https://github.com/Finch-API/finch-api-node/compare/v5.22.4...v5.22.5)

### Chores

* **internal:** forward arguments in scripts/test ([#355](https://github.com/Finch-API/finch-api-node/issues/355)) ([b17aadc](https://github.com/Finch-API/finch-api-node/commit/b17aadc62f2803b97da79f1a67fd701255e74050))

## 5.22.4 (2024-04-30)

Full Changelog: [v5.22.3...v5.22.4](https://github.com/Finch-API/finch-api-node/compare/v5.22.3...v5.22.4)

### Chores

* **internal:** add link to openapi spec ([#353](https://github.com/Finch-API/finch-api-node/issues/353)) ([f165e11](https://github.com/Finch-API/finch-api-node/commit/f165e11411a78cabf9cf99f8be4168290773738a))
* **internal:** add scripts/test, scripts/mock and add ci job ([#354](https://github.com/Finch-API/finch-api-node/issues/354)) ([e33e4af](https://github.com/Finch-API/finch-api-node/commit/e33e4afc2cb1c2f2bdb41d1857f921b288a1f9c9))
* **internal:** refactor scripts ([#351](https://github.com/Finch-API/finch-api-node/issues/351)) ([2c6d68a](https://github.com/Finch-API/finch-api-node/commit/2c6d68a1f010d7f93bb63232741a88f0e39cd711))

## 5.22.3 (2024-04-26)

Full Changelog: [v5.22.2...v5.22.3](https://github.com/Finch-API/finch-api-node/compare/v5.22.2...v5.22.3)

### Chores

* **internal:** add scripts/test and scripts/mock ([#350](https://github.com/Finch-API/finch-api-node/issues/350)) ([5e9a279](https://github.com/Finch-API/finch-api-node/commit/5e9a279282ba88aca221538c8317b062a92541a2))


### Documentation

* clarify behavior around employee_size ([#348](https://github.com/Finch-API/finch-api-node/issues/348)) ([0c634a7](https://github.com/Finch-API/finch-api-node/commit/0c634a7748823e4e7448b32390f0e0f20faaec1e))

## 5.22.2 (2024-04-24)

Full Changelog: [v5.22.1...v5.22.2](https://github.com/Finch-API/finch-api-node/compare/v5.22.1...v5.22.2)

### Chores

* **internal:** use actions/checkout@v4 for codeflow ([#346](https://github.com/Finch-API/finch-api-node/issues/346)) ([956404e](https://github.com/Finch-API/finch-api-node/commit/956404e1751efc2e1bc5f7ea6d94e93987368d8c))

## 5.22.1 (2024-04-22)

Full Changelog: [v5.22.0...v5.22.1](https://github.com/Finch-API/finch-api-node/compare/v5.22.0...v5.22.1)

### Chores

* **internal:** use @swc/jest for running tests ([#344](https://github.com/Finch-API/finch-api-node/issues/344)) ([ea531ff](https://github.com/Finch-API/finch-api-node/commit/ea531ff0f7e883f7ec5aad047b871fa2c6984462))

## 5.22.0 (2024-04-16)

Full Changelog: [v5.21.0...v5.22.0](https://github.com/Finch-API/finch-api-node/compare/v5.21.0...v5.22.0)

### Features

* **api:** updates ([#341](https://github.com/Finch-API/finch-api-node/issues/341)) ([8afb72f](https://github.com/Finch-API/finch-api-node/commit/8afb72fcffac287d80d8fb905ebf4890a9837571))


### Chores

* **internal:** formatting ([#342](https://github.com/Finch-API/finch-api-node/issues/342)) ([38263ef](https://github.com/Finch-API/finch-api-node/commit/38263ef0762688d7ebe285945ba78787b7dea453))
* **internal:** update gitignore ([#339](https://github.com/Finch-API/finch-api-node/issues/339)) ([8250f7b](https://github.com/Finch-API/finch-api-node/commit/8250f7b4e3678ecdcadb3d74b3ea902b66973756))


### Build System

* configure UTF-8 locale in devcontainer ([#343](https://github.com/Finch-API/finch-api-node/issues/343)) ([52fec36](https://github.com/Finch-API/finch-api-node/commit/52fec36bf493e26a7a2e216eea0637a3024bd0b5))

## 5.21.0 (2024-04-09)

Full Changelog: [v5.20.3...v5.21.0](https://github.com/Finch-API/finch-api-node/compare/v5.20.3...v5.21.0)

### Features

* **api:** updates ([#337](https://github.com/Finch-API/finch-api-node/issues/337)) ([18d4cbf](https://github.com/Finch-API/finch-api-node/commit/18d4cbf657415f66016621057d52f034db264750))

## 5.20.3 (2024-04-04)

Full Changelog: [v5.20.2...v5.20.3](https://github.com/Finch-API/finch-api-node/compare/v5.20.2...v5.20.3)

### Chores

* **api:** improve descriptions ([#335](https://github.com/Finch-API/finch-api-node/issues/335)) ([4423c16](https://github.com/Finch-API/finch-api-node/commit/4423c1655414ba9efe63dba4d244c2c56e7acb7e))

## 5.20.2 (2024-04-02)

Full Changelog: [v5.20.1...v5.20.2](https://github.com/Finch-API/finch-api-node/compare/v5.20.1...v5.20.2)

### Bug Fixes

* **client:** correctly send deno version header ([#330](https://github.com/Finch-API/finch-api-node/issues/330)) ([1a6a391](https://github.com/Finch-API/finch-api-node/commit/1a6a3917773135c9df219b48d9c58a0f2077b86e))
* handle process.env being undefined in debug func ([#329](https://github.com/Finch-API/finch-api-node/issues/329)) ([eece7be](https://github.com/Finch-API/finch-api-node/commit/eece7be004ff2c0af0347c7f0b490c4d7f187683))
* **internal:** make toFile use input file's options ([#326](https://github.com/Finch-API/finch-api-node/issues/326)) ([d186ce5](https://github.com/Finch-API/finch-api-node/commit/d186ce54ab5b36ce407fa6cd7b2e9592c539501c))


### Chores

* **deps:** bump yarn to v1.22.22 ([#334](https://github.com/Finch-API/finch-api-node/issues/334)) ([430f174](https://github.com/Finch-API/finch-api-node/commit/430f174bfe073b1455278870e17b6bcd730dcdfb))
* **deps:** remove unused dependency digest-fetch ([#333](https://github.com/Finch-API/finch-api-node/issues/333)) ([708bb25](https://github.com/Finch-API/finch-api-node/commit/708bb25b4756afe00195ddb388803a1955f423c6))
* **internal:** update generated pragma comment ([#325](https://github.com/Finch-API/finch-api-node/issues/325)) ([d02405e](https://github.com/Finch-API/finch-api-node/commit/d02405e96e118dca7c957559da6c3388b2d8776e))
* revert temporary commit ([c8eaa32](https://github.com/Finch-API/finch-api-node/commit/c8eaa32783402ac574fc9e75708c49f981646697))
* temporary commit ([#331](https://github.com/Finch-API/finch-api-node/issues/331)) ([3eed917](https://github.com/Finch-API/finch-api-node/commit/3eed9170aad5040de36b9ff67ee84d2570472550))


### Documentation

* deprecate old access token getter ([#319](https://github.com/Finch-API/finch-api-node/issues/319)) ([ecc280e](https://github.com/Finch-API/finch-api-node/commit/ecc280ea6ffff0a438797553cd85cf9d94589cf0))
* fix typo in CONTRIBUTING.md ([#324](https://github.com/Finch-API/finch-api-node/issues/324)) ([80f40f0](https://github.com/Finch-API/finch-api-node/commit/80f40f05eaaabb9d7c9b5661eed7aa13319cccdc))
* **readme:** consistent use of sentence case in headings ([#327](https://github.com/Finch-API/finch-api-node/issues/327)) ([7ce1750](https://github.com/Finch-API/finch-api-node/commit/7ce175022727b7c02498f3711a691d3bcab0fb68))
* **readme:** document how to make undocumented requests ([#328](https://github.com/Finch-API/finch-api-node/issues/328)) ([be65719](https://github.com/Finch-API/finch-api-node/commit/be65719a447e39f14e13df2be1c4cb8be2321f00))
* remove extraneous --save and yarn install instructions ([#321](https://github.com/Finch-API/finch-api-node/issues/321)) ([9a8955f](https://github.com/Finch-API/finch-api-node/commit/9a8955f15abfb18ca4bab84bfe576e0af9396a3f))
* use [@deprecated](https://github.com/deprecated) decorator for deprecated params ([#322](https://github.com/Finch-API/finch-api-node/issues/322)) ([9af6cec](https://github.com/Finch-API/finch-api-node/commit/9af6cecaee25b4e8220b6501f0710b6d5d9b9d2d))

## 5.20.1 (2024-03-05)

Full Changelog: [v5.20.0...v5.20.1](https://github.com/Finch-API/finch-api-node/compare/v5.20.0...v5.20.1)

### Chores

* fix error handler in readme ([#315](https://github.com/Finch-API/finch-api-node/issues/315)) ([60a49fc](https://github.com/Finch-API/finch-api-node/commit/60a49fcdf213b78913ad98b9e26ad4f120616c2e))
* remove internal-only field ([#318](https://github.com/Finch-API/finch-api-node/issues/318)) ([d5df915](https://github.com/Finch-API/finch-api-node/commit/d5df9156803f63f225c6d9cbf72187c1d973bd2f))
* update some doc strings ([#313](https://github.com/Finch-API/finch-api-node/issues/313)) ([cbb8ab2](https://github.com/Finch-API/finch-api-node/commit/cbb8ab2e7f9fa204d2b96f1d571d38edee7062fa))


### Documentation

* **readme:** fix https proxy example ([#317](https://github.com/Finch-API/finch-api-node/issues/317)) ([e87c189](https://github.com/Finch-API/finch-api-node/commit/e87c18942e95aea6d9ba50a783944eb4fea9ee63))
* update some doc strings ([#316](https://github.com/Finch-API/finch-api-node/issues/316)) ([d0c0cc0](https://github.com/Finch-API/finch-api-node/commit/d0c0cc09bdb3308f2b1030b80818709365e407f5))

## 5.20.0 (2024-03-01)

Full Changelog: [v5.19.0...v5.20.0](https://github.com/Finch-API/finch-api-node/compare/v5.19.0...v5.20.0)

### Features

* **api:** make redirect_uri optional ([#309](https://github.com/Finch-API/finch-api-node/issues/309)) ([dece0b1](https://github.com/Finch-API/finch-api-node/commit/dece0b197d3dcdef8e4d942dd63c9116f0993b9e))


### Chores

* **ci:** update actions/setup-node action to v4 ([#306](https://github.com/Finch-API/finch-api-node/issues/306)) ([264cd84](https://github.com/Finch-API/finch-api-node/commit/264cd84d0612cd7c38f668c3f6bd7915797c7cea))
* **docs:** mention install from git repo ([#312](https://github.com/Finch-API/finch-api-node/issues/312)) ([179ba5f](https://github.com/Finch-API/finch-api-node/commit/179ba5f0fe3949bdb5931cec7c9e84ab908857da))
* **internal:** update deps ([#308](https://github.com/Finch-API/finch-api-node/issues/308)) ([86633d4](https://github.com/Finch-API/finch-api-node/commit/86633d4edecb98d6915f1a580795f2fa92e4e58d))


### Documentation

* **contributing:** improve wording ([#310](https://github.com/Finch-API/finch-api-node/issues/310)) ([bef514c](https://github.com/Finch-API/finch-api-node/commit/bef514c4bfd856472d349c751f1d98f2ea16a101))
* **readme:** fix typo in custom fetch implementation ([#311](https://github.com/Finch-API/finch-api-node/issues/311)) ([5b8010f](https://github.com/Finch-API/finch-api-node/commit/5b8010ffd678dae1a695b2f739a56e9a68ea23d7))

## 5.19.0 (2024-02-20)

Full Changelog: [v5.18.2...v5.19.0](https://github.com/Finch-API/finch-api-node/compare/v5.18.2...v5.19.0)

### Features

* **api:** create new sandbox job ([#302](https://github.com/Finch-API/finch-api-node/issues/302)) ([30247e3](https://github.com/Finch-API/finch-api-node/commit/30247e358e89f3aa751a951538a41fdeeb909e4f))

## 5.18.2 (2024-02-15)

Full Changelog: [v5.18.1...v5.18.2](https://github.com/Finch-API/finch-api-node/compare/v5.18.1...v5.18.2)

### Chores

* **internal:** refactor release environment script ([#299](https://github.com/Finch-API/finch-api-node/issues/299)) ([3147fb7](https://github.com/Finch-API/finch-api-node/commit/3147fb7e739df2b93ca2104f68d74c06ddc9a5c9))

## 5.18.1 (2024-02-08)

Full Changelog: [v5.18.0...v5.18.1](https://github.com/Finch-API/finch-api-node/compare/v5.18.0...v5.18.1)

### Chores

* **internal:** enable building when git installed ([#293](https://github.com/Finch-API/finch-api-node/issues/293)) ([3e9c578](https://github.com/Finch-API/finch-api-node/commit/3e9c578ab6bdd73b53a4d164b566f7ba814ca0bf))
* **internal:** minor pagination restructuring ([#296](https://github.com/Finch-API/finch-api-node/issues/296)) ([1553843](https://github.com/Finch-API/finch-api-node/commit/1553843d1f49f2dce99062a80907e828cc21de4c))
* **internal:** update package.json formatting ([#298](https://github.com/Finch-API/finch-api-node/issues/298)) ([c053279](https://github.com/Finch-API/finch-api-node/commit/c0532797e9410d918b19db0b7a8f7577f9170f36))
* respect `application/vnd.api+json` content-type header ([#297](https://github.com/Finch-API/finch-api-node/issues/297)) ([80c3c95](https://github.com/Finch-API/finch-api-node/commit/80c3c95a1256da5f60e5dc37730cbde3f73345d9))


### Documentation

* add a CONTRIBUTING.md ([#295](https://github.com/Finch-API/finch-api-node/issues/295)) ([4bb24b5](https://github.com/Finch-API/finch-api-node/commit/4bb24b59f073fe66ff4b1fabaa44abadc774265b))

## 5.18.0 (2024-02-02)

Full Changelog: [v5.17.2...v5.18.0](https://github.com/Finch-API/finch-api-node/compare/v5.17.2...v5.18.0)

### Features

* **api:** create access token reads client opts if not provided ([#290](https://github.com/Finch-API/finch-api-node/issues/290)) ([8cd787e](https://github.com/Finch-API/finch-api-node/commit/8cd787e107c7ffb2b850d095ab49c6b8144e2c04))


### Chores

* **interal:** make link to api.md relative ([#292](https://github.com/Finch-API/finch-api-node/issues/292)) ([12dd552](https://github.com/Finch-API/finch-api-node/commit/12dd552314f7d83eae9d51e8a67a33710e506f32))

## 5.17.2 (2024-01-30)

Full Changelog: [v5.17.1...v5.17.2](https://github.com/Finch-API/finch-api-node/compare/v5.17.1...v5.17.2)

### Chores

* **internal:** support pre-release versioning ([#288](https://github.com/Finch-API/finch-api-node/issues/288)) ([d97d778](https://github.com/Finch-API/finch-api-node/commit/d97d7780bfae0e3a577d9c0630c57fda1683035d))

## 5.17.1 (2024-01-30)

Full Changelog: [v5.17.0...v5.17.1](https://github.com/Finch-API/finch-api-node/compare/v5.17.0...v5.17.1)

### Features

* **api:** add employer_contributions field ([#282](https://github.com/Finch-API/finch-api-node/issues/282)) ([98c1da0](https://github.com/Finch-API/finch-api-node/commit/98c1da07b0a63d590aceb6c7a431367a6e7b6069))


### Bug Fixes

* allow body type in RequestOptions to be null ([#284](https://github.com/Finch-API/finch-api-node/issues/284)) ([d948729](https://github.com/Finch-API/finch-api-node/commit/d948729156f0abaceaac671069786f4a1764f235))
* **api:** fix authentication_type enum ([#286](https://github.com/Finch-API/finch-api-node/issues/286)) ([6ff8af1](https://github.com/Finch-API/finch-api-node/commit/6ff8af17c77e966e069d1290c153d6371412f255))
* **api:** update `employer_size` parameter to `employee_size` ([#287](https://github.com/Finch-API/finch-api-node/issues/287)) ([cbb933f](https://github.com/Finch-API/finch-api-node/commit/cbb933f2f147021d461d943133727748d2ae2468))
* **types:** accept undefined for optional client options ([#280](https://github.com/Finch-API/finch-api-node/issues/280)) ([169ddc6](https://github.com/Finch-API/finch-api-node/commit/169ddc6702dd3b11c8fb8f810d45227bd6375ea9))


### Chores

* **ci:** rely on Stainless GitHub App for releases ([#281](https://github.com/Finch-API/finch-api-node/issues/281)) ([fac02eb](https://github.com/Finch-API/finch-api-node/commit/fac02eb20b886703e63f879021dcbe18f65617e3))
* **internal:** add internal helpers & improve build scripts ([#285](https://github.com/Finch-API/finch-api-node/issues/285)) ([fb91cd8](https://github.com/Finch-API/finch-api-node/commit/fb91cd841b7f3f927ce9c3abf33b0b56ed406d9a))
* **internal:** debug logging for retries; speculative retry-after-ms support ([#279](https://github.com/Finch-API/finch-api-node/issues/279)) ([90b0dad](https://github.com/Finch-API/finch-api-node/commit/90b0dadde179f58073c8b88c9de9de1bc187d8f6))


### Documentation

* fix missing async in readme code sample ([#277](https://github.com/Finch-API/finch-api-node/issues/277)) ([893f7cc](https://github.com/Finch-API/finch-api-node/commit/893f7cc9e2d0bb3bd2472b485a88170768f9b78d))

## 5.17.0 (2024-01-12)

Full Changelog: [v5.16.0...v5.17.0](https://github.com/Finch-API/finch-api-node/compare/v5.16.0...v5.17.0)

### Features

* **webhooks:** add types to the `unwrap` method ([#273](https://github.com/Finch-API/finch-api-node/issues/273)) ([52be237](https://github.com/Finch-API/finch-api-node/commit/52be2376e996353197185130d52ce15b21d592df))


### Chores

* **internal:** narrow type into stringifyQuery ([#275](https://github.com/Finch-API/finch-api-node/issues/275)) ([8ed3d63](https://github.com/Finch-API/finch-api-node/commit/8ed3d630ca4ef00604a2fa697e5a348eac5f8690))


### Documentation

* **readme:** improve api reference ([#276](https://github.com/Finch-API/finch-api-node/issues/276)) ([ccc6aec](https://github.com/Finch-API/finch-api-node/commit/ccc6aec4ac0d082fd17ac11901ee805ea689afa3))

## 5.16.0 (2024-01-11)

Full Changelog: [v5.15.0...v5.16.0](https://github.com/Finch-API/finch-api-node/compare/v5.15.0...v5.16.0)

### Features

* **client:** hook up sandbox auth ([#271](https://github.com/Finch-API/finch-api-node/issues/271)) ([ffba918](https://github.com/Finch-API/finch-api-node/commit/ffba9185df0a2652052574aebd145c710943ca39))
* remove redundant endpoint, add sandbox client options (not yet used) ([#270](https://github.com/Finch-API/finch-api-node/issues/270)) ([d49613c](https://github.com/Finch-API/finch-api-node/commit/d49613cd6bc7658b59bc11e955d72588a73c4856))


### Bug Fixes

* use default base url if BASE_URL env var is blank ([#272](https://github.com/Finch-API/finch-api-node/issues/272)) ([3d89ada](https://github.com/Finch-API/finch-api-node/commit/3d89ada8c22bd7ff8272e55d6115a304a548998f))


### Chores

* **internal:** rename unreleased connection status type ([#268](https://github.com/Finch-API/finch-api-node/issues/268)) ([2b070f8](https://github.com/Finch-API/finch-api-node/commit/2b070f8305a630654f655248986f2d752534cd66))

## 5.15.0 (2024-01-09)

Full Changelog: [v5.14.3...v5.15.0](https://github.com/Finch-API/finch-api-node/compare/v5.14.3...v5.15.0)

### Features

* **api:** add method to create access token ([#264](https://github.com/Finch-API/finch-api-node/issues/264)) ([ca0af62](https://github.com/Finch-API/finch-api-node/commit/ca0af623e1f6d2352dc6606fc142bce23ababd5f))
* **api:** add sandbox APIs ([#266](https://github.com/Finch-API/finch-api-node/issues/266)) ([25351a2](https://github.com/Finch-API/finch-api-node/commit/25351a25a79456659a7e3b10f1920d7a4f20b889))


### Bug Fixes

* **headers:** always send lowercase headers and strip undefined (BREAKING in rare cases) ([#262](https://github.com/Finch-API/finch-api-node/issues/262)) ([2fab66d](https://github.com/Finch-API/finch-api-node/commit/2fab66d500babc803b2d3558adea36e11796cdd8))


### Chores

* add .keep files for examples and custom code directories ([#265](https://github.com/Finch-API/finch-api-node/issues/265)) ([3290e79](https://github.com/Finch-API/finch-api-node/commit/3290e79fff61ad1062884ce4b60d67db3061b974))
* **internal:** bump license ([#260](https://github.com/Finch-API/finch-api-node/issues/260)) ([adf6d44](https://github.com/Finch-API/finch-api-node/commit/adf6d44c1bf71f5b4cd3da78ead100c19a57b6c6))
* **internal:** improve type signatures ([#263](https://github.com/Finch-API/finch-api-node/issues/263)) ([1a7f266](https://github.com/Finch-API/finch-api-node/commit/1a7f266045010133185aca29d514dc79969ed2a4))
* **test:** update examples ([#267](https://github.com/Finch-API/finch-api-node/issues/267)) ([e23e91b](https://github.com/Finch-API/finch-api-node/commit/e23e91bca3a209e12ef13cc25cb859554195fc14))

## 5.14.3 (2023-12-20)

Full Changelog: [v5.14.2...v5.14.3](https://github.com/Finch-API/finch-api-node/compare/v5.14.2...v5.14.3)

### Documentation

* reformat README.md ([#259](https://github.com/Finch-API/finch-api-node/issues/259)) ([aeadd81](https://github.com/Finch-API/finch-api-node/commit/aeadd812236bad61610280946b98db000e27aad3))


### Refactors

* write jest config in typescript ([#257](https://github.com/Finch-API/finch-api-node/issues/257)) ([b19f8be](https://github.com/Finch-API/finch-api-node/commit/b19f8be4a71e4b0ae70d198fb6fde1656ed562b3))

## 5.14.2 (2023-12-19)

Full Changelog: [v5.14.1...v5.14.2](https://github.com/Finch-API/finch-api-node/compare/v5.14.1...v5.14.2)

### Chores

* **deps:** update jest ([#254](https://github.com/Finch-API/finch-api-node/issues/254)) ([2e9e648](https://github.com/Finch-API/finch-api-node/commit/2e9e648d9fd234d18b9d04c0dc20052b70ad43e8))


### Documentation

* replace &lt;br&gt; tags with newlines ([#256](https://github.com/Finch-API/finch-api-node/issues/256)) ([53245a5](https://github.com/Finch-API/finch-api-node/commit/53245a5eddd523bc8f376a84d4a29b172b4308a2))

## 5.14.1 (2023-12-17)

Full Changelog: [v5.14.0...v5.14.1](https://github.com/Finch-API/finch-api-node/compare/v5.14.0...v5.14.1)

### Chores

* **ci:** run release workflow once per day ([#252](https://github.com/Finch-API/finch-api-node/issues/252)) ([b14c751](https://github.com/Finch-API/finch-api-node/commit/b14c751de2c5060f17e0225dba9c038b43d4b092))
* **deps:** update dependency ts-jest to v29.1.1 ([#253](https://github.com/Finch-API/finch-api-node/issues/253)) ([3c3ed3f](https://github.com/Finch-API/finch-api-node/commit/3c3ed3fa3b5a13242444f619b11d6ad22b5ccf38))
* update dependencies ([#251](https://github.com/Finch-API/finch-api-node/issues/251)) ([28ce45a](https://github.com/Finch-API/finch-api-node/commit/28ce45a5b90746f0165a52b785079f3f0d69588d))
* update prettier ([#250](https://github.com/Finch-API/finch-api-node/issues/250)) ([f5136d8](https://github.com/Finch-API/finch-api-node/commit/f5136d8dc494361985d15347e1b938430d0c1276))


### Documentation

* fix typo in docstring ([#249](https://github.com/Finch-API/finch-api-node/issues/249)) ([2f47957](https://github.com/Finch-API/finch-api-node/commit/2f47957b25e99f356c62b87cfabb4586ad1bb008))


### Build System

* specify `packageManager: yarn` ([#247](https://github.com/Finch-API/finch-api-node/issues/247)) ([cb3e03f](https://github.com/Finch-API/finch-api-node/commit/cb3e03f474a96a05e1a4a0e09918fa232d19533e))

## 5.14.0 (2023-12-07)

Full Changelog: [v5.13.0...v5.14.0](https://github.com/Finch-API/finch-api-node/compare/v5.13.0...v5.14.0)

### Features

* **api:** add `lp` tax payer type enum value ([#245](https://github.com/Finch-API/finch-api-node/issues/245)) ([81f7cfd](https://github.com/Finch-API/finch-api-node/commit/81f7cfd732b013b4d225b8cbf12eec45da669cfd))

## 5.13.0 (2023-12-06)

Full Changelog: [v5.12.1...v5.13.0](https://github.com/Finch-API/finch-api-node/compare/v5.12.1...v5.13.0)

### Features

* **api:** add `/jobs` endpoints ([#241](https://github.com/Finch-API/finch-api-node/issues/241)) ([8dc8f9d](https://github.com/Finch-API/finch-api-node/commit/8dc8f9d5b54a45d1240bb7cfda0646badce970b7))
* **api:** add `client_type` and `connection_type` to introspection ([#243](https://github.com/Finch-API/finch-api-node/issues/243)) ([5f0f755](https://github.com/Finch-API/finch-api-node/commit/5f0f755371dacace56442d4cb90bb620ceb3d0d7))

## 5.12.1 (2023-12-04)

Full Changelog: [v5.12.0...v5.12.1](https://github.com/Finch-API/finch-api-node/compare/v5.12.0...v5.12.1)

## 5.12.0 (2023-11-30)

Full Changelog: [v5.11.2...v5.12.0](https://github.com/Finch-API/finch-api-node/compare/v5.11.2...v5.12.0)

### Features

* **client:** support reading the base url from an env variable ([#237](https://github.com/Finch-API/finch-api-node/issues/237)) ([c813a07](https://github.com/Finch-API/finch-api-node/commit/c813a07ccd5e5ba2660d12c279ebc17be24301ae))

## 5.11.2 (2023-11-28)

Full Changelog: [v5.11.1...v5.11.2](https://github.com/Finch-API/finch-api-node/compare/v5.11.1...v5.11.2)

## 5.11.1 (2023-11-24)

Full Changelog: [v5.11.0...v5.11.1](https://github.com/Finch-API/finch-api-node/compare/v5.11.0...v5.11.1)

### Chores

* **internal:** remove file import and conditionally run prepare ([#233](https://github.com/Finch-API/finch-api-node/issues/233)) ([b01e6ba](https://github.com/Finch-API/finch-api-node/commit/b01e6badb2a8d6fabf259d3a7ad70278c4a7f7c7))

## 5.11.0 (2023-11-21)

Full Changelog: [v5.10.0...v5.11.0](https://github.com/Finch-API/finch-api-node/compare/v5.10.0...v5.11.0)

### Features

* allow installing package directly from github ([#231](https://github.com/Finch-API/finch-api-node/issues/231)) ([2bd1250](https://github.com/Finch-API/finch-api-node/commit/2bd12500a193f1a088d58d7a7a94e1258a07ccfd))
* **api:** updates ([#229](https://github.com/Finch-API/finch-api-node/issues/229)) ([55eddee](https://github.com/Finch-API/finch-api-node/commit/55eddeeeef882a657e293e573249127bf8fb2813))


### Chores

* **internal:** don't call prepare in dist ([#232](https://github.com/Finch-API/finch-api-node/issues/232)) ([ab65376](https://github.com/Finch-API/finch-api-node/commit/ab653763178d27f2d63c124264081dc074bd2478))

## 5.10.0 (2023-11-14)

Full Changelog: [v5.9.1...v5.10.0](https://github.com/Finch-API/finch-api-node/compare/v5.9.1...v5.10.0)

### Features

* **api:** updates ([#226](https://github.com/Finch-API/finch-api-node/issues/226)) ([02081ab](https://github.com/Finch-API/finch-api-node/commit/02081abdec5b6833ad6eb1df68b949dd1741e8ca))


### Chores

* **internal:** update APIResource structure ([#228](https://github.com/Finch-API/finch-api-node/issues/228)) ([8955d3a](https://github.com/Finch-API/finch-api-node/commit/8955d3ab051c6b382b0453ea7e9f55adb54d8dc5))

## 5.9.1 (2023-11-10)

Full Changelog: [v5.9.0...v5.9.1](https://github.com/Finch-API/finch-api-node/compare/v5.9.0...v5.9.1)

### Chores

* **ci:** update release-please config ([#220](https://github.com/Finch-API/finch-api-node/issues/220)) ([07f9e0f](https://github.com/Finch-API/finch-api-node/commit/07f9e0f9738bff822feec6066bb7e7058cafe751))
* **docs:** fix github links ([#223](https://github.com/Finch-API/finch-api-node/issues/223)) ([9621b0e](https://github.com/Finch-API/finch-api-node/commit/9621b0e7313d514434847ff330d2df19454c7e76))
* **docs:** fix some typos ([#222](https://github.com/Finch-API/finch-api-node/issues/222)) ([5eb553b](https://github.com/Finch-API/finch-api-node/commit/5eb553b89ca72c8fdbc9d1c9e9e5edf191274e0b))
* **internal:** update jest config ([#225](https://github.com/Finch-API/finch-api-node/issues/225)) ([9cc65d2](https://github.com/Finch-API/finch-api-node/commit/9cc65d23ce328242798886d7a1a334be9341db94))
* **internal:** update tsconfig ([#224](https://github.com/Finch-API/finch-api-node/issues/224)) ([e7e60e2](https://github.com/Finch-API/finch-api-node/commit/e7e60e2610fa259959f916ab33c8afb3d9d7dd9d))

## 5.9.0 (2023-11-05)

Full Changelog: [v5.8.0...v5.9.0](https://github.com/Finch-API/finch-api-node/compare/v5.8.0...v5.9.0)

### Features

* **client:** allow binary returns ([#215](https://github.com/Finch-API/finch-api-node/issues/215)) ([1a28957](https://github.com/Finch-API/finch-api-node/commit/1a28957c4d83aeb948882aae6b39c43b7272c5a5))


### Documentation

* document customizing fetch ([#217](https://github.com/Finch-API/finch-api-node/issues/217)) ([ac4e4a6](https://github.com/Finch-API/finch-api-node/commit/ac4e4a62cf26e724dd9d6ecf1950c57659d5e852))
* **readme:** remove redundant whitespace ([#218](https://github.com/Finch-API/finch-api-node/issues/218)) ([82f3f79](https://github.com/Finch-API/finch-api-node/commit/82f3f797837d5799540488df9ad2f83adfb4aac8))

## 5.8.0 (2023-10-31)

Full Changelog: [v5.7.3...v5.8.0](https://github.com/Finch-API/finch-api-node/compare/v5.7.3...v5.8.0)

### Features

* **github:** include a devcontainer setup ([#213](https://github.com/Finch-API/finch-api-node/issues/213)) ([c0cc335](https://github.com/Finch-API/finch-api-node/commit/c0cc335d2f776409b40e2ca7406ac87874824c8d))

## 5.7.3 (2023-10-27)

Full Changelog: [v5.7.2...v5.7.3](https://github.com/Finch-API/finch-api-node/compare/v5.7.2...v5.7.3)

### Chores

* **internal:** update gitignore ([#211](https://github.com/Finch-API/finch-api-node/issues/211)) ([4172782](https://github.com/Finch-API/finch-api-node/commit/4172782342d2648a6091d9c1a8cf92401efebda2))

## 5.7.2 (2023-10-25)

Full Changelog: [v5.7.1...v5.7.2](https://github.com/Finch-API/finch-api-node/compare/v5.7.1...v5.7.2)

### Bug Fixes

* typo in build script ([#209](https://github.com/Finch-API/finch-api-node/issues/209)) ([e991d97](https://github.com/Finch-API/finch-api-node/commit/e991d97fdc63c0efd364806a780c7dcd7192592b))

## 5.7.1 (2023-10-24)

Full Changelog: [v5.7.0...v5.7.1](https://github.com/Finch-API/finch-api-node/compare/v5.7.0...v5.7.1)

## 5.7.0 (2023-10-24)

Full Changelog: [v5.6.0...v5.7.0](https://github.com/Finch-API/finch-api-node/compare/v5.6.0...v5.7.0)

### Features

* **client:** adjust retry behavior to be exponential backoff ([#205](https://github.com/Finch-API/finch-api-node/issues/205)) ([c5423fe](https://github.com/Finch-API/finch-api-node/commit/c5423fef84320fd86a1e16ec67e9f969563cac8f))

## 5.6.0 (2023-10-19)

Full Changelog: [v5.5.1...v5.6.0](https://github.com/Finch-API/finch-api-node/compare/v5.5.1...v5.6.0)

### Features

* handle 204 No Content gracefully ([#203](https://github.com/Finch-API/finch-api-node/issues/203)) ([dfe54d0](https://github.com/Finch-API/finch-api-node/commit/dfe54d02f1592735727dce2ec1e05100c9e7f87d))

## 5.5.1 (2023-10-19)

Full Changelog: [v5.5.0...v5.5.1](https://github.com/Finch-API/finch-api-node/compare/v5.5.0...v5.5.1)

## 5.5.0 (2023-10-17)

Full Changelog: [v5.4.2...v5.5.0](https://github.com/Finch-API/finch-api-node/compare/v5.4.2...v5.5.0)

### Features

* make webhook headers case insensitive ([#196](https://github.com/Finch-API/finch-api-node/issues/196)) ([bf48e89](https://github.com/Finch-API/finch-api-node/commit/bf48e8919409ac8609fbc4416cf9252ffb2afa6d))


### Bug Fixes

* **client:** eliminate circular imports, which cause runtime errors in webpack dev bundles ([#189](https://github.com/Finch-API/finch-api-node/issues/189)) ([6977468](https://github.com/Finch-API/finch-api-node/commit/6977468570b7bbcb1d509872ac3164ddd77c9820))
* correct benfits to benefits ([#192](https://github.com/Finch-API/finch-api-node/issues/192)) ([a31d068](https://github.com/Finch-API/finch-api-node/commit/a31d068568545b2e1ab8e61a8f205c91037e014d))
* fix namespace exports regression ([#191](https://github.com/Finch-API/finch-api-node/issues/191)) ([c7b90b2](https://github.com/Finch-API/finch-api-node/commit/c7b90b299135d0947603e9055a2bb72bdea7d1c2))
* import web-streams-polyfill without overriding globals ([#200](https://github.com/Finch-API/finch-api-node/issues/200)) ([e8ab145](https://github.com/Finch-API/finch-api-node/commit/e8ab1453849f74938b161966de039b24a2e566e2))
* improve status code in error messages ([#198](https://github.com/Finch-API/finch-api-node/issues/198)) ([836a552](https://github.com/Finch-API/finch-api-node/commit/836a5524d6b37cb0537629a9f76cc25fe9df5f2d))


### Chores

* **internal:** refactor status code printing in error ([#193](https://github.com/Finch-API/finch-api-node/issues/193)) ([51b5d57](https://github.com/Finch-API/finch-api-node/commit/51b5d5767ac489449795081c3c76e772cb860414))
* update comment ([#197](https://github.com/Finch-API/finch-api-node/issues/197)) ([05dfcb8](https://github.com/Finch-API/finch-api-node/commit/05dfcb8166d0466f9b5611d14422ff78137532c8))


### Documentation

* organisation -&gt; organization (UK to US English) ([#199](https://github.com/Finch-API/finch-api-node/issues/199)) ([7dd52a3](https://github.com/Finch-API/finch-api-node/commit/7dd52a34f726fce396a5ff4cc8579d86ad1f2416))


### Refactors

* **test:** refactor authentication tests ([#194](https://github.com/Finch-API/finch-api-node/issues/194)) ([68d1562](https://github.com/Finch-API/finch-api-node/commit/68d1562eaf8d076c619545f2b0a1f8dafe57fe02))

## 5.4.2 (2023-10-06)

Full Changelog: [v5.4.1...v5.4.2](https://github.com/Finch-API/finch-api-node/compare/v5.4.1...v5.4.2)

### Bug Fixes

* prevent ReferenceError, update compatibility to ES2020 and Node 18+ ([#187](https://github.com/Finch-API/finch-api-node/issues/187)) ([92eb90f](https://github.com/Finch-API/finch-api-node/commit/92eb90f393e52b00f565c8af7bdf0dc7df8bf183))

## 5.4.1 (2023-10-06)

Full Changelog: [v5.4.0...v5.4.1](https://github.com/finch-api/finch-api-node/compare/v5.4.0...v5.4.1)

## 5.4.0 (2023-10-05)

Full Changelog: [v5.3.0...v5.4.0](https://github.com/Finch-API/finch-api-node/compare/v5.3.0...v5.4.0)

### Features

* **api:** add `/forward` endpoint and other updates ([#181](https://github.com/Finch-API/finch-api-node/issues/181)) ([12e49a9](https://github.com/Finch-API/finch-api-node/commit/12e49a92037f905024a9e1b8f29e5c5e2411123f))


### Chores

* **docs:** adjust some docstrings ([#182](https://github.com/Finch-API/finch-api-node/issues/182)) ([80e04cc](https://github.com/Finch-API/finch-api-node/commit/80e04ccff202d9586948d710b36387391895d8f7))
* **docs:** adjust some docstrings ([#184](https://github.com/Finch-API/finch-api-node/issues/184)) ([f4b9efb](https://github.com/Finch-API/finch-api-node/commit/f4b9efb132d93eec48255b0eee61508632b1bb79))
* **internal:** update lock file ([#176](https://github.com/Finch-API/finch-api-node/issues/176)) ([51ab814](https://github.com/Finch-API/finch-api-node/commit/51ab814dae82c91aa5439a15936ae85984695fb8))
* **tests:** update test examples ([#183](https://github.com/Finch-API/finch-api-node/issues/183)) ([a40c66e](https://github.com/Finch-API/finch-api-node/commit/a40c66e44d17d8c6178c699a5b166c38cf41b4d9))

## 5.4.0 (2023-10-03)

Full Changelog: [v5.3.0...v5.4.0](https://github.com/Finch-API/finch-api-node/compare/v5.3.0...v5.4.0)

### Features

* **api:** add `/forward` endpoint and other updates ([#181](https://github.com/Finch-API/finch-api-node/issues/181)) ([cb720d9](https://github.com/Finch-API/finch-api-node/commit/cb720d939f06d24707185dff50483433237b1401))


### Chores

* **docs:** adjust some docstrings ([#182](https://github.com/Finch-API/finch-api-node/issues/182)) ([7ae0d7f](https://github.com/Finch-API/finch-api-node/commit/7ae0d7f2874fc75191d588029c3d056293daf26d))
* **docs:** adjust some docstrings ([#184](https://github.com/Finch-API/finch-api-node/issues/184)) ([161c7e0](https://github.com/Finch-API/finch-api-node/commit/161c7e062e870f25ce860868792b025037f22a21))
* **internal:** update lock file ([#176](https://github.com/Finch-API/finch-api-node/issues/176)) ([1bfc032](https://github.com/Finch-API/finch-api-node/commit/1bfc03219892e0a19dc60d8703b6f8afcf13af87))
* **tests:** update test examples ([#183](https://github.com/Finch-API/finch-api-node/issues/183)) ([6865f9f](https://github.com/Finch-API/finch-api-node/commit/6865f9f3a52ef342ca85fdc202e0609949cfabc8))

## 5.3.0 (2023-09-26)

Full Changelog: [v5.2.0...v5.3.0](https://github.com/Finch-API/finch-api-node/compare/v5.2.0...v5.3.0)

### Features

* **ci:** add reviewers ([#170](https://github.com/Finch-API/finch-api-node/issues/170)) ([a29194d](https://github.com/Finch-API/finch-api-node/commit/a29194d11ceb8afbe8c9a98ddeadbf8c569bf068))
* **client:** handle retry-after with a date ([#174](https://github.com/Finch-API/finch-api-node/issues/174)) ([747a82b](https://github.com/Finch-API/finch-api-node/commit/747a82b615fb85674922c630e6047c8e1b5f1306))
* **package:** export a root error type ([#171](https://github.com/Finch-API/finch-api-node/issues/171)) ([1be7dc7](https://github.com/Finch-API/finch-api-node/commit/1be7dc713869cb5b27be34cd7b0876c0e2001827))


### Chores

* **internal:** update lock file ([#173](https://github.com/Finch-API/finch-api-node/issues/173)) ([0e92b0c](https://github.com/Finch-API/finch-api-node/commit/0e92b0cf0c7b21eea82965445ce0a8590d2b3205))
* **internal:** update lock file ([#175](https://github.com/Finch-API/finch-api-node/issues/175)) ([bf8578e](https://github.com/Finch-API/finch-api-node/commit/bf8578e847c12ae95f5b019ee216daa02de14513))


### Documentation

* **api.md:** add shared models ([#168](https://github.com/Finch-API/finch-api-node/issues/168)) ([bd33a59](https://github.com/Finch-API/finch-api-node/commit/bd33a59358f131618262dd57fcfc38c18014d1a1))

## 5.2.0 (2023-09-21)

Full Changelog: [v5.1.0...v5.2.0](https://github.com/Finch-API/finch-api-node/compare/v5.1.0...v5.2.0)

### Features

* **client:** retry on 408 Request Timeout ([#159](https://github.com/Finch-API/finch-api-node/issues/159)) ([b28c579](https://github.com/Finch-API/finch-api-node/commit/b28c57911bac472b249d23aa373c175a02877b20))
* **client:** support importing node or web shims manually ([#166](https://github.com/Finch-API/finch-api-node/issues/166)) ([8812dcc](https://github.com/Finch-API/finch-api-node/commit/8812dccf79d3f9d9e3b6c026b4049f4eb0c7df35))
* **errors:** add status code to error message ([#163](https://github.com/Finch-API/finch-api-node/issues/163)) ([edea234](https://github.com/Finch-API/finch-api-node/commit/edea234ee18e89e9313dcc3b49c172bdc3b750b8))


### Chores

* **api:** remove deprecated & unused ATS API ([#164](https://github.com/Finch-API/finch-api-node/issues/164)) ([e9377e8](https://github.com/Finch-API/finch-api-node/commit/e9377e81b26c08d023c64d1ec6fb7b160a1b92bf))


### Documentation

* declare Bun 1.0 officially supported ([#162](https://github.com/Finch-API/finch-api-node/issues/162)) ([b082f06](https://github.com/Finch-API/finch-api-node/commit/b082f06fb881e69331beed46ded0a7b2bbdb6235))
* **README:** fix variable names in some examples ([#167](https://github.com/Finch-API/finch-api-node/issues/167)) ([7e83bae](https://github.com/Finch-API/finch-api-node/commit/7e83bae3434dc75b0cc10e647d56a11857a7fdab))
* **readme:** remove incorrect wording in opening ([#165](https://github.com/Finch-API/finch-api-node/issues/165)) ([ec99ddb](https://github.com/Finch-API/finch-api-node/commit/ec99ddb8e80c94f47f591789981884813b54a837))

## 5.1.0 (2023-09-08)

Full Changelog: [v5.0.0...v5.1.0](https://github.com/Finch-API/finch-api-node/compare/v5.0.0...v5.1.0)

### Features

* add webhook verification methods ([#153](https://github.com/Finch-API/finch-api-node/issues/153)) ([bbcd2d3](https://github.com/Finch-API/finch-api-node/commit/bbcd2d397493d9697ae8f91cc4b878cb4767ee78))
* **package:** add Bun export map ([#145](https://github.com/Finch-API/finch-api-node/issues/145)) ([a30eed3](https://github.com/Finch-API/finch-api-node/commit/a30eed30dbd6988855df99b969c9d38f438aeb9b))


### Bug Fixes

* **client:** fix TS errors that appear when users Go to Source in VSCode ([#150](https://github.com/Finch-API/finch-api-node/issues/150)) ([81cf41d](https://github.com/Finch-API/finch-api-node/commit/81cf41daa58ae151856655df3c28da642f24b014))
* **client:** handle case where the client is instantiated with a undefined baseURL ([#151](https://github.com/Finch-API/finch-api-node/issues/151)) ([45c409c](https://github.com/Finch-API/finch-api-node/commit/45c409c1896920f2a01ae219c9fe41f86bf001a6))
* **client:** use explicit file extensions in _shims imports ([#149](https://github.com/Finch-API/finch-api-node/issues/149)) ([5484933](https://github.com/Finch-API/finch-api-node/commit/54849335187d3639bd92afe67fccda1925073c26))
* fix module not found errors in Vercel edge ([#156](https://github.com/Finch-API/finch-api-node/issues/156)) ([e39458c](https://github.com/Finch-API/finch-api-node/commit/e39458c3522e406ac246276daa4685549ace8393))
* **readme:** update link to api.md to use the correct branch ([#154](https://github.com/Finch-API/finch-api-node/issues/154)) ([312a217](https://github.com/Finch-API/finch-api-node/commit/312a2172cfbf0e21af7759315c1247e97fd8ec92))


### Chores

* **internal:** add example for configuration ([#147](https://github.com/Finch-API/finch-api-node/issues/147)) ([ac9de99](https://github.com/Finch-API/finch-api-node/commit/ac9de99f30dc2cb31bf4361f68382f33c9a1ed9d))
* **internal:** export helper from core ([#155](https://github.com/Finch-API/finch-api-node/issues/155)) ([46233a7](https://github.com/Finch-API/finch-api-node/commit/46233a78c56a25f5300f0766e47d8f90cc603733))


### Documentation

* **readme:** add link to api.md ([#152](https://github.com/Finch-API/finch-api-node/issues/152)) ([601c2ba](https://github.com/Finch-API/finch-api-node/commit/601c2ba9cc95cc9c06f55b652309828f6c5ddc1f))

## 5.0.0 (2023-08-29)

Full Changelog: [v4.2.1...v5.0.0](https://github.com/Finch-API/finch-api-node/compare/v4.2.1...v5.0.0)

### ⚠ BREAKING CHANGES

* rename response page types ([#144](https://github.com/Finch-API/finch-api-node/issues/144))
* **client:** restructure some methods ([#143](https://github.com/Finch-API/finch-api-node/issues/143))

### Features

* **client:** restructure some methods ([#143](https://github.com/Finch-API/finch-api-node/issues/143)) ([31573ea](https://github.com/Finch-API/finch-api-node/commit/31573ea58f1a0c55c2b973ee6bad589ccc34325d))


### Bug Fixes

* **types:** improve getNextPage() return type ([#141](https://github.com/Finch-API/finch-api-node/issues/141)) ([159c7c3](https://github.com/Finch-API/finch-api-node/commit/159c7c3d0361ec697eceeba8c8d54e6acafffb28))


### Chores

* **ci:** setup workflows to create releases and release PRs ([#139](https://github.com/Finch-API/finch-api-node/issues/139)) ([d969e30](https://github.com/Finch-API/finch-api-node/commit/d969e307ac4a76eb056a7de560c109804d4e3a17))


### Refactors

* rename response page types ([#144](https://github.com/Finch-API/finch-api-node/issues/144)) ([c911250](https://github.com/Finch-API/finch-api-node/commit/c911250c616024b9b3d2e02d3e55fa2279a707f4))

## [4.2.1](https://github.com/Finch-API/finch-api-node/compare/v4.2.0...v4.2.1) (2023-08-26)


### Refactors

* remove unnecessary line in constructor ([#134](https://github.com/Finch-API/finch-api-node/issues/134)) ([39f814f](https://github.com/Finch-API/finch-api-node/commit/39f814fe0a8be2c9e6ead55401ce65ca96b0d4d3))


### Chores

* **internal:** add helper method ([#137](https://github.com/Finch-API/finch-api-node/issues/137)) ([676e907](https://github.com/Finch-API/finch-api-node/commit/676e9074689c11260e9f04818531b79ab495de89))
* **internal:** remove reviewer ([#136](https://github.com/Finch-API/finch-api-node/issues/136)) ([7fecce1](https://github.com/Finch-API/finch-api-node/commit/7fecce17da938489e3c9906019f778e836625d17))

## [4.2.0](https://github.com/Finch-API/finch-api-node/compare/v4.1.0...v4.2.0) (2023-08-24)


### Features

* **types:** export RequestOptions type ([#131](https://github.com/Finch-API/finch-api-node/issues/131)) ([6977ab0](https://github.com/Finch-API/finch-api-node/commit/6977ab0f2c729e4744d123b9324c48778a55bb5e))


### Bug Fixes

* **core:** fix navigator check for strange environments ([#129](https://github.com/Finch-API/finch-api-node/issues/129)) ([74edc8d](https://github.com/Finch-API/finch-api-node/commit/74edc8d37c9c4f48f1d1afef8e9403ab1e35d166))


### Chores

* **internal:** add missing eslint-plugin-prettier ([#128](https://github.com/Finch-API/finch-api-node/issues/128)) ([1000bd6](https://github.com/Finch-API/finch-api-node/commit/1000bd65c0a08b6b93d6475abaa4a2c8ddc366b3))
* **internal:** export HeadersInit type shim ([#132](https://github.com/Finch-API/finch-api-node/issues/132)) ([60b23ca](https://github.com/Finch-API/finch-api-node/commit/60b23cab1511c6991078132003403ee0df185baf))
* **internal:** minor reformatting of code ([#126](https://github.com/Finch-API/finch-api-node/issues/126)) ([ee3c2fc](https://github.com/Finch-API/finch-api-node/commit/ee3c2fc92e9db0976cf91b8a9cb1cd745ecdd63f))

## [4.1.0](https://github.com/Finch-API/finch-api-node/compare/v4.0.0...v4.1.0) (2023-08-17)


### Features

* **client:** improve compatibility with Bun ([#124](https://github.com/Finch-API/finch-api-node/issues/124)) ([6a9c632](https://github.com/Finch-API/finch-api-node/commit/6a9c632da15ac8977c83ead6c2af15ad106de0a6))
* **docs:** add documentation to the client constructor ([#123](https://github.com/Finch-API/finch-api-node/issues/123)) ([747855e](https://github.com/Finch-API/finch-api-node/commit/747855ea266438dd28f45e3471f7cc24025cf65f))


### Bug Fixes

* **client:** fix TypeError when a request gets retried ([#121](https://github.com/Finch-API/finch-api-node/issues/121)) ([25de6e2](https://github.com/Finch-API/finch-api-node/commit/25de6e2e3c63812a024ad2b011f722d031ae187e))

## [4.0.0](https://github.com/Finch-API/finch-api-node/compare/v3.1.3...v4.0.0) (2023-08-16)


### ⚠ BREAKING CHANGES

* **client:** support accessing raw response + remove deprecated features ([#114](https://github.com/Finch-API/finch-api-node/issues/114))

### Features

* allow a default timeout to be set for clients ([#117](https://github.com/Finch-API/finch-api-node/issues/117)) ([5264bb7](https://github.com/Finch-API/finch-api-node/commit/5264bb7b27e4d0801e994dbd095f0f9497f77569))
* **client:** detect browser usage ([#106](https://github.com/Finch-API/finch-api-node/issues/106)) ([0a322ae](https://github.com/Finch-API/finch-api-node/commit/0a322aeff94c482784c001a7b8b898f574efbecd))
* **client:** support accessing raw response + remove deprecated features ([#114](https://github.com/Finch-API/finch-api-node/issues/114)) ([31c306b](https://github.com/Finch-API/finch-api-node/commit/31c306b15dbfffacee1dac360a70d126447a24fb))
* **streaming:** add `.toReadableStream()` method ([#109](https://github.com/Finch-API/finch-api-node/issues/109)) ([7715977](https://github.com/Finch-API/finch-api-node/commit/77159777775af0a3ac5708426d13d3d02a6076e9))


### Documentation

* **api:** improve custom method arguments ([#108](https://github.com/Finch-API/finch-api-node/issues/108)) ([f9bc372](https://github.com/Finch-API/finch-api-node/commit/f9bc372b44398715cd2cbe99313fcd92d73f9749))
* **readme:** minor updates ([#115](https://github.com/Finch-API/finch-api-node/issues/115)) ([575b46c](https://github.com/Finch-API/finch-api-node/commit/575b46cf6103b12404c964e07884f89ce6198167))
* **readme:** remove beta status + document versioning policy ([#105](https://github.com/Finch-API/finch-api-node/issues/105)) ([bc2c0c0](https://github.com/Finch-API/finch-api-node/commit/bc2c0c07f7280364fbb5ffe77ec136f8d31a861c))


### Chores

* assign default reviewers to release PRs ([#118](https://github.com/Finch-API/finch-api-node/issues/118)) ([f114455](https://github.com/Finch-API/finch-api-node/commit/f1144553f95e74f16c57a287848c615893c2acea))
* **internal:** change jest exclude patterns ([#113](https://github.com/Finch-API/finch-api-node/issues/113)) ([54e17f0](https://github.com/Finch-API/finch-api-node/commit/54e17f0928d88b125f1670efb539f5703788515c))
* **internal:** conditionally include bin during build output ([#116](https://github.com/Finch-API/finch-api-node/issues/116)) ([f5ac09f](https://github.com/Finch-API/finch-api-node/commit/f5ac09fd5b33f19474e1facc987c9eff92c3b030))
* **internal:** fix deno build ([#102](https://github.com/Finch-API/finch-api-node/issues/102)) ([0a8e4b6](https://github.com/Finch-API/finch-api-node/commit/0a8e4b6a0cfaf921ba86949d69c1df4ef878d56c))
* **internal:** fix deno build ([#104](https://github.com/Finch-API/finch-api-node/issues/104)) ([e0aa74a](https://github.com/Finch-API/finch-api-node/commit/e0aa74a57b0f513acb02291609a89969da99751c))
* **internal:** fix error happening in CloudFlare pages ([#119](https://github.com/Finch-API/finch-api-node/issues/119)) ([312ea9c](https://github.com/Finch-API/finch-api-node/commit/312ea9c3eba9eb82da6ba06f7cb24aa0734f1910))
* **internal:** remove deno build ([#107](https://github.com/Finch-API/finch-api-node/issues/107)) ([15dff8a](https://github.com/Finch-API/finch-api-node/commit/15dff8aca63439aebcb9f3fba25c34c750c5885b))
* **internal:** update eslint ([#111](https://github.com/Finch-API/finch-api-node/issues/111)) ([3cf152d](https://github.com/Finch-API/finch-api-node/commit/3cf152dc4e9c9cbe23ed493eb0cf22db6c1e8397))
* **internal:** update tsconfig-paths dep ([#112](https://github.com/Finch-API/finch-api-node/issues/112)) ([032c38b](https://github.com/Finch-API/finch-api-node/commit/032c38b1e0f069cfaa8dbee65cb9b55bb807baaa))
* **internal:** update typescript ([#110](https://github.com/Finch-API/finch-api-node/issues/110)) ([d16061a](https://github.com/Finch-API/finch-api-node/commit/d16061ac1d68d0aacb322d8e339ab14479ec7740))

## [3.1.3](https://github.com/Finch-API/finch-api-node/compare/v3.1.2...v3.1.3) (2023-08-01)


### Bug Fixes

* **client:** handle undefined process in more places ([#96](https://github.com/Finch-API/finch-api-node/issues/96)) ([3fa25a2](https://github.com/Finch-API/finch-api-node/commit/3fa25a29af8958292159e0193249385516dec78b))
* fix undefined message in errors ([#94](https://github.com/Finch-API/finch-api-node/issues/94)) ([b4f1e34](https://github.com/Finch-API/finch-api-node/commit/b4f1e34145a122daa8431dd1db787721899732fe))


### Chores

* **internal:** allow the build script to be run without yarn installed ([#99](https://github.com/Finch-API/finch-api-node/issues/99)) ([f8ce4ec](https://github.com/Finch-API/finch-api-node/commit/f8ce4ece26f9ea832f8ede4e9a6a0fd0ef351d7c))
* **internal:** minor refactoring of client instantiation ([#97](https://github.com/Finch-API/finch-api-node/issues/97)) ([c9658e3](https://github.com/Finch-API/finch-api-node/commit/c9658e37d8a1b2c0ac02ed010c9e244fdd50992e))
* **internal:** remove duplicate assignment ([#91](https://github.com/Finch-API/finch-api-node/issues/91)) ([578c305](https://github.com/Finch-API/finch-api-node/commit/578c3059e237175f665b9799377a12053da07214))


### Refactors

* create build for deno.land ([#100](https://github.com/Finch-API/finch-api-node/issues/100)) ([02af2ec](https://github.com/Finch-API/finch-api-node/commit/02af2ec33a3e572b3c74b36f77c92d532141556b))
* use destructuring arguments in client constructor and respect false values ([#98](https://github.com/Finch-API/finch-api-node/issues/98)) ([5eba1d1](https://github.com/Finch-API/finch-api-node/commit/5eba1d1c314aedbdb62fa225eea85412cfa57eaa))

## [3.1.2](https://github.com/Finch-API/finch-api-node/compare/v3.1.1...v3.1.2) (2023-07-22)


### Chores

* **client:** improve compatibility ([#83](https://github.com/Finch-API/finch-api-node/issues/83)) ([b25f382](https://github.com/Finch-API/finch-api-node/commit/b25f382b16952a3ce13eff3e870c9f030bf5f33d))

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
