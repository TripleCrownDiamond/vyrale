# 🛠 Technical Documentation — ⚡vyrale

**Important Note:** All development work on this project should be conducted using the **Trae AI IDE** to leverage its agentic capabilities and ensure consistency in workflows and automation integration.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🔧 Tech Stack Overview (Leveraging Open Source)

| Layer | Technology |
| :---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

--- | :---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

--- |
| **Frontend** | Next.js 14 + TailwindCSS + Shadcn/UI |
| **Backend** | Supabase (Database, API, Auth, Storage) |
| **Authentication** | Clerk.dev initially ➔ plan to migrate to an Open Source alternative (e.g., Lucia, NextAuth.js, Supabase Auth) |
| **AI Content Generation** | Open Source LLMs (LLaMA, Mistral, Dolphin, etc.) + optional fallback to OpenAI |
| **Automation** | n8n.io + Trae AI IDE agents and flows |
| **Payments** | Flutterwave, KKiaPay, Qosic, Crypto (Polygon/Matic/USDC) |
| **Deployment** | Vercel (could migrate to Railway or self-hosted if necessary) |

**Note:**

- Technologies are selected prioritizing robust **open-source** components and free tiers where practical.
- **Important:** While the underlying stack leverages open-source software, the final **⚡vyrale application itself is a commercial product and will not be open-source or free.**
- Future migrations toward more independent, scalable hosting are anticipated.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 📝 Frontend Architecture

- **Framework**: Next.js 14 App Router (`/app` directory)
- **Styling**: TailwindCSS (utility-first CSS)
- **Components**: Shadcn/UI (reusable React components)
- **Form Management**: React Hook Form + Zod validation
- **State Management**: Built-in React Context or lightweight libraries (Zustand if necessary)

**Structure Example:**

```plaintext
/app
  /dashboard
  /auth
  /profile
  /posts
/components
/lib
/utils
/public
```

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 📥 Backend & Database

- **Database**: PostgreSQL (managed by Supabase)
- **Auth & Security**: Supabase Auth (fallback plan), OAuth integration for social sign-ins
- **APIs**: Supabase Edge Functions and Serverless API routes via Next.js
- **Storage**: Supabase Storage for media (logos, images)
- **CRON Jobs**: Supabase scheduled functions or Vercel CRON triggers

**Main Tables:**

- `users`
- `profiles`
- `posts`
- `subscriptions`
- `schedules`

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🧠 AI Integration

| Task | Technology |
| :---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

--- | :---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

--- |
| Text generation | Open Source LLMs (LLaMA 3, Mistral 7B, Dolphin, etc.) |
| Image generation | Stable Diffusion (SDXL, 1.5) via HuggingFace or Replicate API |
| Automation | n8n.io workflows, Trae AI IDE agents |

**Strategy:**

- Use open models locally or via free hosting (Replicate/HuggingFace)
- Only fallback to commercial APIs (OpenAI, Anthropic) if absolutely necessary

**Extended AI Content Management:**

- Images generated must be **editable** via an internal **editor**: change fonts, font sizes, reposition logos, edit text overlays.
- A custom lightweight **AI-powered editor** (similar to Canva) will be developed for visual post editing.
- Future scaling will allow editing of **generated videos** similarly.
- Inputs from external content sources (e.g., blog articles, Spotify stats for artists) will be supported to automatically create promotional visuals.
- Users will be able to **upload their own images and videos** instead of relying only on AI generation.
- Contact links, personal branding elements, and CTAs will be editable and added easily.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🌐 Social Media API Integrations

- **Meta Graph API**: Facebook Pages + Instagram Business posting
- **WhatsApp Business API**: (future)
- **Planned Integrations**: LinkedIn, TikTok, X (Twitter)

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 💳 Payments System

| Provider | Purpose |
| :---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---- | :---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

--- |
| Flutterwave | Card and Mobile Money payments |
| KKiaPay | Alternative Mobile Money platform |
| Qosic Pay | Micro-transactions and Mobile Money |
| Crypto | Accept MATIC, USDC on Polygon network |

**Future proof**: Modular payment provider integration (easily switch or add new providers)

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## ✍️ Developer Principles

- **Code Quality**: Clean, modular, documented
- **Open Source Preference**: Always prioritize open, cost-effective models and libraries

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 📚 Git Workflow Standards

| Type | Branch naming |
| :---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---- | :---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

--- |
| Production | `main` |
| Development | `develop` |
| Features | `feature/feature-name` |
| Bugfixes | `bugfix/bug-name` |

**Commit Message Format (Conventional Commits)**:

```bash
feat: Add user profile creation
fix: Resolve auth error on login page
chore: Clean up old components
docs: Update API usage guide
```

**Rules:**

- 1 Pull Request (PR) per feature.
- No direct commits to `main` or `develop`.
- PR reviews are mandatory.

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🛠 CI/CD and Deployment

- **Platform**: Vercel (default for fast deployment)
- **Branch Deploys**: Preview deployments on all PRs
- **Production Deploy**: Triggered from `main` branch merge

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## 🌟 Future Technical Enhancements

- **Authentication Migration**: Move to Lucia or NextAuth.js if needed for full control
- **Self-Hosting Options**: Railway, Fly.io, or VPS if scaling requires it
- **Custom AI Agent Hosting**: Local inference of LLaMA/Mistral models to reduce costs
- **Dedicated n8n Server**: Full control on workflow execution without 3rd party limitations
- **Advanced Content Inputs**: Drop blog articles, Spotify stats, custom data for auto-promotion post generation

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

- **Discord / WhatsApp Communication**

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

## ✍️ Code Commenting Standards

- **Purpose**: Comments should explain the _why_, not the _what_. Assume the reader understands the language syntax.
- **Clarity**: Write clear, concise comments. Avoid jargon where possible.
- **TODOs**: Use `// TODO:` for tasks that need to be done. Include a brief description and optionally your name/date.
  ```javascript
  // TODO: Refactor this logic to use the new utility function (User - YYYY-MM-DD)
  ```

# ✅ End of Technical Documentation

---

## 🐛 Troubleshooting / Common Issues

### NPM ERESOLVE Error with `react-day-picker`

**Symptom:**

When running `npm install`, you might encounter an `ERESOLVE` error similar to the following:

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-day-picker@8.10.1
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
...
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"^8.10.1" from the root project
```

**Cause:**

This error occurs because `react-day-picker@8.10.1` has a peer dependency on an older version of React (e.g., `^16.8.0 || ^17.0.0 || ^18.0.0`), while the project is using a newer version (e.g., `react@19.1.0` as specified in `package.json`).

**Solution:**

To bypass this peer dependency conflict, you can use the `--legacy-peer-deps` flag with npm install:

```bash
npm install --legacy-peer-deps
```

This command tells npm to ignore peer dependencies and proceed with the installation. While this can resolve the immediate issue, be aware that it might lead to unexpected behavior if the installed package is truly incompatible with the newer version of its peer dependency. It's generally recommended to look for updated versions of packages that are compatible with your project's dependencies.

---

[← Back to Project Hub](vyrale.md)
