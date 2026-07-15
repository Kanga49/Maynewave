# MayneWave Production Site

Run `python3 serve.py`, then open `http://localhost:8000`.

Before launch: replace cabin placeholder, add measured walking times, connect booking links, password-protect Guest Guide, and test all map pins.


## Map scrolling
Mouse-wheel zoom is disabled so normal page scrolling does not zoom the Atlas. Visitors can still use the map zoom buttons, double-click, and touch gestures.


## MayneWave Studio

Open:

```text
/studio.html
```

The Studio edits Atlas destinations in your browser.

Workflow:

1. Edit destinations and drag pins.
2. Click **Save working copy** while working.
3. Click **Export places.json**.
4. Replace `assets/data/places.json` with the exported file.
5. Redeploy the whole project folder to Netlify.

The Studio is an editing utility. Do not link it in the public navigation.


## Edition Two — Sprint 1: Living Atlas

Added:

- Three editable walking routes
- Route buttons and route cards on the Atlas page
- Coloured route overlays
- Route summaries with time, distance and description
- Homepage route preview
- Route editing and `routes.json` export in MayneWave Studio

The route lines currently connect mapped stops directly. Replace placeholder times with measured walks. A later sprint can add road-following route geometry.


## Edition Two — Sprint 2: Field Atlas

Added:

- MayneWave maker's mark
- Custom map symbols by category
- Editorial field-journal panel
- Best-time, look-for and field-note metadata
- Story-based route steps
- Rotating homepage field notes
- Studio fields for destination observations

The new metadata is stored in `assets/data/places.json`.


## Edition Three — Sense of Place

Added:

- Cinematic hero reveal
- Explorer's Notebook drawer
- Seasonal Mayne page
- Atlas filters for Morning, History, Nature, Food and Sunset
- “Five Minutes from Here” homepage section
- Lazy-loading for content images
- Smoother page transitions
- Place tags in `assets/data/places.json`
- Notebook content in `assets/data/notebook.json`

Note: Atlas route lines still connect stops directly rather than following roads.
