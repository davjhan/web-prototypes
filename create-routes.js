#!/usr/bin/env node
import { mkdirSync, rmSync } from 'node:fs'

/*
* Read from every workspace defined in package.json and symlink their routes folders into build/routes
*  */
rmSync('build/routes', { force: true, recursive: true })
mkdirSync('build/routes', { recursive: true })