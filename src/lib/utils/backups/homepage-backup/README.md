# Homepage Backup

This directory contains backups of the main homepage components and layouts before significant changes.

## Contents

- `original-homepage.svelte`: Original homepage implementation before layout modifications

## How to Restore

To restore the homepage:

1. Copy the desired version back to `src/routes/+page.svelte`
2. Test all functionality and layout before deploying

## Location Note

This backup is part of the larger backups structure:

```
src/lib/utils/
  ├── backups/
  │   ├── simulator-backup/     # Craps simulator backups
  │   └── homepage-backup/      # This directory (Homepage backups)
  └── ...
```
