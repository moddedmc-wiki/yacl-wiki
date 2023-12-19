---
title: Installing YACL
description: Learn how to add YACL to your NeoForge or Fabric project.
---

# Installing YACL

The recommended version of YACL is `3.0.0+`, which contains the latest configuration module version of `v2`.

::: warning
If you're already using YACL's `v1` configuration modules (pre-`3.0.0` YACL), refer to the [migration guide](/migrating/v1-to-v2) for information on how to migrate.
:::

## Adding YACL as a dependency

Firstly, you'll need to add the maven repository to your `build.gradle` file:

::: code-group
```groovy [Groovy DSL (build.gradle)]
repositories {
    maven {
        name "Xander's Maven"
        url "https://maven.isxander.dev/releases"
    }
}
```

```kotlin [Kotlin DSL (build.gradle.kts)]
repositories {
    maven("https://maven.isxander.dev/releases") {
        name = "Xander's Maven"
    }
}
```
:::

| Minecraft Version  | YACL Version          |
| ------------------ | --------------------- |
| `1.20.4`, `1.20.3` | `3.3.1+1.20.4`        |
| `1.20.2`           | `3.3.0-beta.1+1.20.2` |
| `1.20.1`, `1.20`   | `3.2.1+1.20`          |

Place the version of YACL you want to use in your `gradle.properties` file:

```properties
yacl_version=...
```

This next part will differ, depending on whether you're using NeoForge or Fabric.

You'll need to add the following dependency to your `build.gradle` file:

::: code-group
```groovy [NeoForge]
dependencies {
    compileOnly fg.deobf("dev.isxander.yacl:yet-another-config-lib-forge:${project.yacl_version}")
}
```

```groovy [Fabric]
dependencies {
    modImplementation "dev.isxander.yacl:yet-another-config-lib-fabric:${project.yacl_version}"
}
```
:::

## Marking YACL as a dependency

You'll need to tell your users that your mod depends on YACL, you can do this by adding the following to your mod's `fabric.mod.json` or `mods.toml` file:

::: warning
Make sure to replace `{YACL_VERSION_HERE}` with the version of YACL you're using!
:::

::: code-group
```json [fabric.mod.json]
{
    "depends": {
        "yacl": ">={YACL_VERSION_HERE}"
    }
}
```

```toml [mods.toml]
[dependencies.yacl]
  modId="yet_another_config_lib_v3"
  versionRange = "[{YACL_VERSION_HERE},)"
  mandatory = true
```
:::