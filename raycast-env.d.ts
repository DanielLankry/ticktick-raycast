/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Token - Your TickTick API access token */
  "apiToken": string,
  /** Default Project ID - Default project for Quick Add Task. Use 'Copy Project ID' in the Projects command to find it. Leave empty for Inbox. */
  "defaultProject"?: string,
  /** Focus Duration (min) - Pomodoro focus session length */
  "pomodoroLength": "15" | "25" | "30" | "45" | "60",
  /** Short Break (min) - Short break duration between sessions */
  "shortBreakLength": "5" | "10",
  /** Long Break (min) - Long break after 4 sessions */
  "longBreakLength": "15" | "20" | "30"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `today` command */
  export type Today = ExtensionPreferences & {}
  /** Preferences accessible in the `search-tasks` command */
  export type SearchTasks = ExtensionPreferences & {}
  /** Preferences accessible in the `projects` command */
  export type Projects = ExtensionPreferences & {}
  /** Preferences accessible in the `inbox` command */
  export type Inbox = ExtensionPreferences & {}
  /** Preferences accessible in the `add-task` command */
  export type AddTask = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-add-task` command */
  export type QuickAddTask = ExtensionPreferences & {}
  /** Preferences accessible in the `calendar` command */
  export type Calendar = ExtensionPreferences & {}
  /** Preferences accessible in the `focus-timer` command */
  export type FocusTimer = ExtensionPreferences & {}
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `today` command */
  export type Today = {}
  /** Arguments passed to the `search-tasks` command */
  export type SearchTasks = {}
  /** Arguments passed to the `projects` command */
  export type Projects = {}
  /** Arguments passed to the `inbox` command */
  export type Inbox = {}
  /** Arguments passed to the `add-task` command */
  export type AddTask = {}
  /** Arguments passed to the `quick-add-task` command */
  export type QuickAddTask = {
  /** Task title */
  "title": string,
  /** Priority (none/low/med/high) */
  "priority": string,
  /** Project name */
  "project": string
}
  /** Arguments passed to the `calendar` command */
  export type Calendar = {}
  /** Arguments passed to the `focus-timer` command */
  export type FocusTimer = {}
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
}

