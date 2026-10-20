export type Setting = {
  key: string;
  type: string;
  def: string;
  range?: string;
  desc: string;
  restart?: boolean;
};

export type SettingGroup = {
  id: string;
  title: string;
  note?: string;
  settings: Setting[];
};

export const settingGroups: SettingGroup[] = [
  {
    id: "core",
    title: "Core",
    note: "The keys you are most likely to touch.",
    settings: [
      {
        key: "hotkey",
        type: "string",
        def: '"Win"',
        desc: "The global shortcut. Win alone is supported through a helper; Ctrl+Space and Ctrl+Shift+Space are the safe alternatives.",
        restart: true,
      },
      {
        key: "launch_at_startup",
        type: "bool",
        def: "true",
        desc: "Start Nex when you sign in to Windows.",
      },
      {
        key: "max_results",
        type: "int",
        def: "20",
        range: "5 to 100",
        desc: "Rows returned per query before scrolling.",
      },
      {
        key: "search_mode_default",
        type: "string",
        def: '"all"',
        range: "all, apps, files, folders, actions, clipboard",
        desc: "The scope the panel opens in when the query is empty.",
      },
      {
        key: "search_dsl_enabled",
        type: "bool",
        def: "true",
        desc: "Enable kind:, modified:, created:, AND, OR, NOT, and leading minus exclusions.",
      },
      {
        key: "uninstall_actions_enabled",
        type: "bool",
        def: "true",
        desc: "Allow uninstall entries to appear in command mode.",
      },
    ],
  },
  {
    id: "panel",
    title: "Panel and performance",
    note: "How the window is drawn, and how much it is allowed to hold.",
    settings: [
      {
        key: "panel_background",
        type: "string",
        def: '"glass"',
        range: "glass, black, white",
        desc: "Glass captures and refracts the desktop behind the panel. Opaque modes skip that work and create the window opaque from the start.",
      },
      {
        key: "grid_view",
        type: "bool",
        def: "false",
        desc: "Show results as a grid of icons instead of a list of rows.",
      },
      {
        key: "game_mode_enabled",
        type: "bool",
        def: "false",
        desc: "Suppress the hotkey while a likely game or fullscreen app is in front.",
      },
      {
        key: "active_memory_target_mb",
        type: "int",
        def: "72",
        range: "20 to 512",
        desc: "The memory budget the panel aims to stay inside while active.",
      },
      {
        key: "idle_cache_trim_ms",
        type: "int",
        def: "900",
        range: "100 to 10000",
        desc: "How long after hiding the icon cache is trimmed.",
      },
      {
        key: "ui_warm_release_ms",
        type: "int",
        def: "5000",
        range: "500 to 600000",
        desc: "How long the WebView stays resident after hiding, which is what makes the next open instant.",
      },
    ],
  },
  {
    id: "search",
    title: "Search and discovery",
    note: "Where files come from and how far the index reaches.",
    settings: [
      {
        key: "discovery_roots",
        type: "string[]",
        def: "[user folder]",
        desc: "Every folder Nex walks. Add drives or project folders here.",
      },
      {
        key: "discovery_exclude_roots",
        type: "string[]",
        def: "[temp, cache]",
        desc: "Folders to leave out. System, temp, and build paths such as node_modules and .git are skipped automatically.",
      },
      {
        key: "show_files",
        type: "bool",
        def: "false",
        desc: "Include files in results.",
      },
      {
        key: "show_folders",
        type: "bool",
        def: "false",
        desc: "Include folders in results.",
      },
      {
        key: "file_discovery_backend",
        type: "string",
        def: '"auto"',
        range: "auto, everything, walkdir",
        desc: "auto asks Voidtools Everything first and falls back to the built-in walker and watcher.",
      },
      {
        key: "web_search_provider",
        type: "string",
        def: '"google"',
        range: "google, duckduckgo, bing, brave, startpage, ecosia, yahoo, custom",
        desc: "The engine command mode uses for web queries.",
      },
      {
        key: "web_search_custom_template",
        type: "string",
        def: '""',
        desc: "URL template used when the provider is custom. It must contain {query}.",
      },
      {
        key: "open_url_in_default_browser",
        type: "bool",
        def: "true",
        desc: "Open bare domains such as youtube.com in the browser instead of searching for them.",
      },
      {
        key: "url_tlds",
        type: "string[]",
        def: "[com, net, org, dev, ...]",
        desc: "The suffixes treated as a domain when you type without a scheme.",
      },
      {
        key: "web_bookmarks",
        type: "array",
        def: "[]",
        desc: "Sites pinned into search results. Entries open in the default browser.",
      },
    ],
  },
  {
    id: "create",
    title: "Creating things",
    note: "What happens when a name does not exist yet.",
    settings: [
      {
        key: "create_actions_enabled",
        type: "bool",
        def: "true",
        desc: "Offer to create a file or folder when the typed name has no local match.",
      },
      {
        key: "default_create_dir",
        type: "string",
        def: '""',
        desc: "Where new items are created. Empty means the current user's Desktop.",
      },
      {
        key: "create_file_extensions",
        type: "string[]",
        def: "[txt, md, py, ps1, ...]",
        desc: "The extensions the create row offers.",
      },
    ],
  },
  {
    id: "clipboard",
    title: "Clipboard",
    note: "Off by default. Encrypted at rest with DPAPI.",
    settings: [
      {
        key: "clipboard_enabled",
        type: "bool",
        def: "false",
        desc: "Record recently copied text so it can be searched.",
      },
      {
        key: "clipboard_retention_minutes",
        type: "int",
        def: "480",
        range: "5 to 43200",
        desc: "How long entries stay in history.",
      },
      {
        key: "clipboard_exclude_sensitive_patterns",
        type: "string[]",
        def: "[password, otp, token, ...]",
        desc: "Substrings that prevent an entry from being captured.",
      },
    ],
  },
  {
    id: "plugins",
    title: "Plugins",
    note: "JSON manifests, loaded from folders you name.",
    settings: [
      {
        key: "plugins_enabled",
        type: "bool",
        def: "true",
        desc: "Load the plugin registry at startup.",
      },
      {
        key: "plugins_safe_mode",
        type: "bool",
        def: "true",
        desc: "Block command actions. Leave this on unless you trust every plugin in the paths below.",
      },
      {
        key: "plugin_paths",
        type: "string[]",
        def: '["%APPDATA%\\\\Nex\\\\plugins"]',
        desc: "Folders or manifest files to scan. Each plugin is a folder with a manifest.json.",
      },
    ],
  },
  {
    id: "quick-launch",
    title: "Quick Launch",
    note: "The row that appears when the query is empty.",
    settings: [
      {
        key: "quick_launch.enabled",
        type: "bool",
        def: "true",
        desc: "Show Quick Launch in the idle panel.",
      },
      {
        key: "quick_launch.max_items",
        type: "int",
        def: "9",
        range: "3 to 12",
        desc: "How many items the row holds.",
      },
      {
        key: "quick_launch.pinned",
        type: "string[]",
        def: "[]",
        desc: "Apps to pin, in order. Store shell:AppsFolder entries or titles.",
      },
      {
        key: "quick_launch.auto_fill",
        type: "bool",
        def: "false",
        desc: "Fill the remaining slots from usage when the pinned list is short.",
      },
    ],
  },
  {
    id: "index",
    title: "Index",
    note: "Caps that keep a large drive from becoming a large index.",
    settings: [
      {
        key: "index_max_items_total",
        type: "int",
        def: "120000",
        desc: "Total items retained across all roots.",
      },
      {
        key: "index_max_items_per_root",
        type: "int",
        def: "40000",
        desc: "Items retained per discovery root.",
      },
      {
        key: "index_max_items_per_query_seed",
        type: "int",
        def: "5000",
        desc: "Candidate budget for a single file query.",
      },
    ],
  },
];
