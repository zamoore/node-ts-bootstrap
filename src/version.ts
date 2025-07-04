/**
 * 🤖 AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * 
 * This file is automatically generated by scripts/generate-version.ts
 * 
 * Package: @your-scope/package-name v0.1.0
 * Generated: 2025-05-26T04:22:46.364Z
 * Git: dev-dirty (main)
 * Node: v21.6.0
 * Platform: darwin arm64
 */

// Package Information
export const name = '@your-scope/package-name'
export const version = '0.1.0'
export const description = 'A modern Node.js package'
export const license = 'MIT'
export const author = 'zamoore <zack.moore89@gmail.com>'
export const homepage = 'https://github.com/your-username/your-repo#readme'

// Build Information
export const buildInfo = {
  buildTime: '2025-05-26T04:22:46.364Z',
  buildUser: 'Zack Moore',
  nodeVersion: 'v21.6.0',
  npmVersion: '10.2.4',
  platform: 'darwin',
  arch: 'arm64',
  timezone: 'America/New_York',
} as const

// Git Information
export const gitInfo = {
  hash: 'dev-dirty',
  branch: 'main',
  tag: '',
  remote: '',
  isDirty: true,
} as const

// Environment Detection
export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isTest = process.env.NODE_ENV === 'test'

// Utility Functions
export function getVersionString(): string {
  const env = process.env.NODE_ENV || 'development'
  return `${name} v${version} (${env})`
}

export function getFullVersionString(): string {
  const env = process.env.NODE_ENV || 'development'
  const gitSuffix = gitInfo.tag || gitInfo.hash
  return `${name} v${version} (${env}) [${gitSuffix}]`
}

export function getBuildString(): string {
  return `Built ${buildInfo.buildTime} by ${buildInfo.buildUser}`
}

/**
 * Compare version with another semantic version string
 * Returns: 1 if current > compare, -1 if current < compare, 0 if equal
 */
export function compareVersion(compareVersion: string): number {
  const [major = 0, minor = 0, patch = 0] = version.split('.').map(v => parseInt(v, 10) || 0)
  const [cMajor = 0, cMinor = 0, cPatch = 0] = compareVersion.split('.').map(v => parseInt(v, 10) || 0)
  
  if (major > cMajor) return 1
  if (major < cMajor) return -1
  if (minor > cMinor) return 1
  if (minor < cMinor) return -1
  if (patch > cPatch) return 1
  if (patch < cPatch) return -1
  return 0
}

/**
 * Check if current version is greater than compare version
 */
export function isVersionGreaterThan(otherVersion: string): boolean {
  return compareVersion(otherVersion) > 0
}

/**
 * Check if current version satisfies a semver range (basic implementation)
 */
export function satisfiesVersion(range: string): boolean {
  // Basic implementation - in real apps you might use 'semver' package
  if (range.startsWith('>=')) {
    return compareVersion(range.slice(2)) >= 0
  }
  if (range.startsWith('>')) {
    return compareVersion(range.slice(1)) > 0
  }
  if (range.startsWith('<=')) {
    return compareVersion(range.slice(2)) <= 0
  }
  if (range.startsWith('<')) {
    return compareVersion(range.slice(1)) < 0
  }
  if (range.startsWith('=') || range.startsWith('==')) {
    return compareVersion(range.replace(/^==?/, '')) === 0
  }
  
  // Exact match
  return version === range
}

/**
 * Get comprehensive version info object
 */
export function getVersionInfo() {
  return {
    package: {
      name,
      version,
      description,
      license,
      author,
      homepage,
    },
    build: buildInfo,
    git: gitInfo,
    environment: {
      isProduction,
      isDevelopment,
      isTest,
      nodeEnv: process.env.NODE_ENV || 'development',
    },
    strings: {
      version: getVersionString(),
      fullVersion: getFullVersionString(),
      build: getBuildString(),
    },
  } as const
}

// Default export for convenience
export default {
  name,
  version,
  buildInfo,
  gitInfo,
  getVersionString,
  getFullVersionString,
  getBuildString,
  compareVersion,
  isVersionGreaterThan,
  satisfiesVersion,
  getVersionInfo,
}
