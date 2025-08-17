import baseConfig, { restrictEnvAccess } from "@core/eslint-config/base";
import nextjsConfig from "@core/eslint-config/nextjs";
import reactConfig from "@core/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
