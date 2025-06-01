# Craps Simulator Backup

This directory contains the original implementation of the Craps Simulator that was temporarily put on hold. The code here includes:

## Main Components

- `original-page.svelte`: The original simulator page with full implementation
- `bet-objects.ts`: Betting system implementation
- `craps-simulator-game.ts`: Core game mechanics
- `bet-rules.ts`: Rules and validation for bets
- `bet--limits.ts`: Betting limits implementation

## Features Implemented

- Pass Line and Don't Pass betting
- Place betting system
- Odds calculations
- Chip placement system
- Rail management
- Full UI components

## How to Restore

To restore the simulator:

1. Copy the contents back to `src/lib/utils/simulator/`
2. Replace `src/routes/craps-simulator/+page.svelte` with `original-page.svelte`
3. Test all functionality before deploying

## Development Status

The simulator was partially implemented with the following features working:

- Basic game structure
- Betting system framework
- UI components and layouts
- Game state management

## Next Steps

When resuming development:

1. Test all existing functionality
2. Complete the dice rolling mechanics
3. Implement remaining bet types
4. Add comprehensive statistics tracking
5. Complete the user interface polish

## Location Note

This backup is part of the larger backups structure:

```
src/lib/utils/
  ├── backups/
  │   ├── simulator-backup/     # This directory (Craps simulator backups)
  │   └── homepage-backup/      # Homepage related backups
  └── ...
```
