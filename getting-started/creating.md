---
title: Creating a Configuration Class
description: Learn how to create a configuration class using YACL.
---

# Creating a Configuration Class

The first step to using YACL is to create a configuration class. This class will contain all of the configuration fields for your mod and will be used to load and save your mod's configuration.

In this example, we will be creating a configuration class that uses a simple configuration handler via a `Gson` serializer (JSON).

```java
public class MyModConfig {
  // Path to your mod's configuration file.
  // Fabric users can use FabricLoader.getInstance().getConfigDir().resolve("<MOD ID HERE>.json")
  // Forge users can use FMLPaths.CONFIGDIR.get().resolve("<MOD ID HERE>.json")
  public static final Path CONFIG_PATH = ...;

  // This handler will be used to load and save your mod's configuration.
  public static final ConfigClassHandler<MyModConfig> HANDLER = ConfigClassHandler.createBuilder(MyModConfig.class)
                .id(new Identifier("<MOD ID HERE>", "config"))

                // You can use various serializes, for the sake of brevity we will use GSON (JSON).
                .serializer(config -> GsonConfigSerializerBuilder
                  .create(config)
                  .setPath(CONFIG_PATH)
                  .appendGsonBuilder(GsonBuilder::setPrettyPrinting))
                .build();
}
```

## Loading, Saving and Getting the Configuration

- To load the configuration, simply call `HANDLER.load()`, this will load the configuration from the file specified in `CONFIG_PATH`.
- To save the configuration, simply call `HANDLER.save()`, this will save the configuration to the file specified in `CONFIG_PATH`.

To get an instance of your configuration class, simply call `HANDLER.instance()`.

It's recommended to make your `HANDLER` field private and provide static load, save and instance methods that proxy to the handler.

```java
public class MyModConfig {
  // ...

  private static final ... HANDLER = ...;

  public static void load() {
    HANDLER.load();
  }

  public static void save() {
    HANDLER.save();
  }

  public static MyModConfig instance() {
    return HANDLER.instance();
  }
  
  // ...
}
```

Therefore, to ensure your configuration is loaded accessed correctly, you should call `MyModConfig.load()` when your mod is loaded, and `MyModConfig.instance()` whenever you need to access the configuration.

::: code-group

```java [Fabric]
public class MyMod implements ModInitializer {
  @Override
  public void onInitialize() {
    MyModConfig.load();
  }
}
```

```java [NeoForge]
@Mod(...)
public class MyMod {
  public MyMod() {
    MyModConfig.load();
  }
}
```

:::

