# AI Coding Instructions for Tapesite

## Project Overview
**Tapesite** is a React + TypeScript music player application for showcasing audio tracks with metadata. It's a responsive web app built with Vite, Bootstrap, and FontAwesome, designed as a subdomain for professional music references.

## Architecture

### Core Pattern: Custom Hook for State Management
- **`useAudioPlayer`** is the single source of truth for all playback state (currently playing song, progress, play/pause status)
- The hook manages the `<audio>` DOM element via `useRef` and exposes a clean API for UI components
- **Why this pattern:** Keeps components stateless and testable; centralizes audio logic

### Component Hierarchy
```
App (orchestrator)
├── Alert (static disclaimer)
├── SongList (left sidebar - song selection)
├── Player (center - UI for current track)
└── Bar (bottom - progress bar/seek control)
```

### Data Flow
1. **Initialization:** `App` calls `useAudioPlayer(songs[0])` to initialize with first song
2. **Selection:** User clicks `SongList` item → `player.setCurrentSong()` → `useEffect` in hook reloads audio
3. **Playback:** `Player` renders controls (play/pause/skip), calls hook methods
4. **Progress:** `<audio onTimeUpdate>` → `hook.onTimeUpdate()` → updates `progress` state → `Bar` displays

### Key Files
- **[src/useAudioPlayer.ts](src/useAudioPlayer.ts)** - Contains all playback logic, extensively commented
- **[src/Player.tsx](src/Player.tsx)** - Main UI for the player with album art and controls
- **[src/SongList.tsx](src/SongList.tsx)** - Scrollable list of all songs with active highlighting
- **[src/songs.ts](src/songs.ts)** - Song data model (`Song` interface) and catalog

## Conventions & Patterns

### Type Safety
- All props are typed with interfaces (e.g., `PlayerProps`, `SongListProps`)
- Song data uses `Song` interface with required fields: `id`, `title`, `artist`, `src`, `cover`, `description`
- Forward refs typed as `React.RefObject<HTMLAudioElement | null>`

### Styling
- Uses **Bootstrap 5.3** for layout (flexbox utility classes: `d-flex`, `flex-grow-1`, `flex-md-row`, `overflow-auto`)
- Custom CSS in [src/styles.css](src/styles.css) for player-specific styles (`.player-view`, `.song-row`, `.progress-bar`, etc.)
- Responsive: breakpoint `md` used for reflow from vertical (mobile) to horizontal (desktop)

### Component Pattern
- Functional components only (no class components)
- Props destructured in function signature
- Event handlers defined in component body or passed from parent
- Audio element managed via `useRef` (created fresh when song changes, not unmounted/remounted)

### Icon System
- **FontAwesome 7.1** for icons: `fa-play`, `fa-pause`, `fa-forward`, `fa-backward`, `fa-music`
- Icons applied as `<i className="fa-solid fa-{icon}"></i>`

## Build & Development

### Scripts
- **`npm run dev`** - Start Vite dev server (HMR enabled)
- **`npm run build`** - TypeScript check (`tsc -b`) then Vite production build
- **`npm run lint`** - ESLint check (ESLint 9 with React plugin)
- **`npm run preview`** - Preview production build locally

### Important Build Notes
- TypeScript build runs **before** Vite build (`tsc -b && vite build`)
- Vite uses **SWC** plugin for fast JSX transform (`@vitejs/plugin-react-swc`)
- Output goes to `dist/` (default Vite behavior)

## Workflow Notes

### Adding New Songs
1. Add entry to [src/songs.ts](src/songs.ts) `songs` array with all `Song` fields
2. Place audio file in `public/audio/{filename}.ogg`
3. Place cover image in `public/covers/{filename}.png`
4. No code changes required; component will auto-render

### Modifying Player Behavior
- All state logic is in `useAudioPlayer` hook - modify here first
- Playback methods: `togglePlay()`, `skip(seconds)`, `seek()`, `onTimeUpdate()`
- If adding features (e.g., volume, speed), extend the hook and expose new methods/state

### Adding UI Features
- New UI components get props from `App` component (fetch from `useAudioPlayer` result)
- Keep components pure - no side effects except rendering
- Pass event handlers down; let `useAudioPlayer` manage state changes

## Integration Points

### Audio Files & Covers
- Audio files referenced via `src` property (e.g., `/audio/01.ogg`)
- Covers via `cover` property (e.g., `/covers/cover1.png`)
- Missing covers fall back to FontAwesome music icon (`fa-music`)
- Files served from `public/` directory (Vite serves statically)

### External Dependencies
- **React 19.2** - Component framework
- **Bootstrap 5.3** - CSS utility framework (no JavaScript components used)
- **FontAwesome Free 7.1** - Icon library
- **Vite 7.2** - Build tool & dev server

## Gotchas & Quirks

### Progress Bar Logic
- In [src/SongList.tsx](src/SongList.tsx), the timeline width is hardcoded to `30%` when active (not synced to actual playback progress) - this appears intentional for UI simplicity

### Audio Element Ref
- `useRef` is used not `useState` because audio element is persistent DOM; ref updates don't trigger re-renders
- The `<audio>` element is recreated when `currentSong` changes (useEffect dependency)

### Type Definitions
- Check `tsconfig.json` for strict mode settings (likely strict null checks enabled)
- React types imported as `React.FC<Props>` for functional component typing

---

**Questions for refinement:** Are there specific future features planned (e.g., playlist management, local storage for playback position, volume control) that should influence the architecture decisions documented here?
