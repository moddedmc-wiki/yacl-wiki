---
title: Migrating to YACL 3.2+
description: A migration guide for migrating from YACL's old configuration system to the new one.
---

# Migrating to YACL 3.2+

::: danger
The old configuration API is deprecated and may be removed in future releases.
:::

In YACL 3.2, the new configuration API was added. It introduced new annotations, config handlers and a new automatic screen generation system.

## Annotations

First of all, `@ConfigEntry` annotations will not work with the new system, you must change any fields with these annotations to use the new `@SerialEntry` annotation.

```diff {1-2}
- @ConfigEntry
+ @SerialEntry
public boolean myOption = false;
```

The new `@SerialEntry` annotation has the benefit of comments, which are available if you enable JSON5 support in the new GSON serializer.

## ConfigHandlers

`GsonConfigInstance` will not work with any of the new configuration annotations or the new GSON serializer, you must use the new `ConfigHandler` system.

An example of a configuration in both GsonConfigInstance and ConfigHandler systems:

::: code-group

```java [GsonConfigInstance]
private static final Path CONFIG_FILE_PATH = ...;

private static final GsonConfigInstance<MyConfig> GSON = GsonConfigInstance.createBuilder(MyConfig.class)
            .overrideGsonBuilder(new GsonBuilder()
                    .disableHtmlEscaping()
                    .setPrettyPrinting()
                    .registerTypeAdapter(Something.class, new SomethingTypeAdapter())
                    .registerTypeAdapter(SomethingElse.class, new SomethingElseTypeAdapter())
                    .create())
            .setPath(CONFIG_FILE_PATH)
            .build();
```

```java [ConfigHandler]
private static final Path CONFIG_FILE_PATH = ...;

private static final ConfigHandler<MyConfig> HANDLER = ConfigClassHandler
                .createBuilder(MyConfig.class)
                .id(new Identifier("mymod", "config"))
                .serializer(config -> {
                  // Pretty Printing is enabled by default now.
                  var builder = GsonConfigSerializerBuilder
                    .create(config)
                    .setPath(CONFIG_FILE_PATH)
                    .appendGsonBuilder(builder -> builder.registerTypeAdapter(Something.class, new SomethingTypeAdapter()))
                    .appendGsonBuilder(builder -> builder.registerTypeAdapter(SomethingElse.class, new SomethingElseTypeAdapter()))
                    .appendGsonBuilder(builder -> builder.disableHtmlEscaping())
                    //.setJson5(true) // uncomment this for JSON5 support

                  return builder.build();
                })
                .build();
```

:::

You should refer to [Creating a Configuration Class](/getting-started/creating) for more detail on ConfigHandlers.