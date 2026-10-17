# Energy Combustion Design Structure

This document describes the structure, visual system, and layout patterns used in the current `index.html` and `style.css` so additional pages can follow the same design language.

## Project Summary

- Brand: `Energy Combustion`
- Type: industrial importer and distributor website
- Style direction: clean industrial, white + charcoal base with orange accent
- Goal: create matching inner pages and detail pages that feel like part of the same site

## Core Visual Style

- Primary accent color: `#ee5a24`
- Accent hover/shade color: `#d84b1c`
- Dark background color: `#171717` and `#202020`
- Light page background: `#f6f4f1`
- Surface background: `#ffffff`
- Border color: `#e7e2dc`
- Typography: Arial / Helvetica fallback stack
- Tone: professional, industrial, premium, clean

## Global Layout Rules

- Content width uses a centered container
- Max width is approximately `1180px`
- Common section padding: `44px 0`
- Section titles are uppercase and centered
- Orange underline bar appears under major headings
- Cards use soft borders, subtle shadows, and rounded corners

## Page Structure

The current homepage follows this order:

1. Topbar
2. Main navigation header
3. Hero slider
4. About Us section
5. Products section
6. Industries We Serve section
7. Why Choose Us section
8. Contact Us section
9. Footer

## Header Structure

### Topbar

- Left side:
  - phone icon
  - phone number
  - email icon
  - email address
- Right side:
  - “Follow Us :”
  - social icons for Facebook, Twitter, LinkedIn

### Main Navbar

- Left:
  - custom Energy Combustion logo
  - brand name
  - subtitle: `Importer & Distributor`
- Right:
  - navigation links
  - Home
  - About Us
  - Products
  - Brands
  - Contact Us

## Logo System

- Logo is built as an inline SVG
- Used in both header and footer
- Logo contains:
  - circular badge
  - orange flame-like form
  - `EC` lettering
- The logo is self-contained and does not require an image file

## Hero Slider

### Purpose

- Main banner at top of the page
- Works as a rotating slider
- Uses industrial-themed visual backgrounds

### Features

- Auto-rotates between slides
- Left/right navigation arrows
- Dot indicators for current slide
- Pauses on hover
- Slide content updates dynamically

### Slide Content Pattern

- Large headline
- Orange highlight word/phrase
- Supporting description text
- Primary CTA button
- Secondary CTA button

### Hero Visual Language

- Dark industrial background
- Orange glow and flame-like accents
- Machinery-inspired image composition

## About Us Section

### Layout

- Two-column layout
- Left side: large visual block with overlapping smaller image panel
- Right side: text content and checklist

### Content Pattern

- Heading: `About Energy Combustion`
- Short intro paragraph
- Two-column checklist with icon bullets
- CTA button: `Read More`

### Visual Direction

- Image-heavy, industrial, warm orange highlights
- Rounded image corners
- Overlapping photo card effect

## Products Section

### Layout

- Section title centered
- Product cards in a grid
- CTA button below grid: `View All Products`

### Card Pattern

- Product image/illustration area
- Product name
- Short description
- `View Details` button

### Products Listed

- Industrial Burners
- Burner Controllers
- Ignition Transformers
- Gas Valves
- Pressure Switches
- Flame Sensors
- Solenoid Valves

## Industries We Serve Section

### Layout

- Dark full-width strip
- Section title centered in white
- 8 icon tiles in a grid

### Industries Listed

- Textile Industry
- Ceramic Industry
- Food Processing
- Chemical Plants
- Boilers
- Furnaces
- Packaging Industry
- Pharma Industry

### Visual Pattern

- Orange square icon tiles
- White icon strokes
- Bold industry labels beneath icons

## Why Choose Us Section

### Layout

- Four equal cards in a grid
- White background
- Clean card-based presentation

### Cards

- Quality Products
- Trusted Brands
- Technical Support
- Quick Service

### Card Style

- Rounded corners
- Light orange top accent bar
- Circular icon badge at top
- Short supporting text

## Contact Us Section

### Layout

- Three columns:
  - contact form
  - contact details
  - map placeholder

### Form Fields

- Name
- Phone Number
- Email Address
- Message
- Send Message button

### Contact Details

- Address
- Phone
- Email

### Map Area

- Styled placeholder map panel
- Pin marker
- Label: `Energy Combustion`

## Footer Structure

### Column 1

- Logo
- Brand name
- Short description
- Social links

### Column 2

- Quick Links

### Column 3

- Our Products

### Column 4

- Contact Info with themed icons:
  - location
  - phone
  - email

### Bottom Bar

- Copyright line
- Design/development credit line

## Icon and Color Rules

- All contact icons should use the theme orange accent
- Icons should be clean, stroke-based SVGs
- Avoid plain text symbols when a real icon is needed
- Use consistent icon sizing across header and footer

## Component Styling Rules

- Buttons:
  - primary buttons use orange fill
  - secondary buttons use transparent background with light border
  - uppercase labels

- Cards:
  - white cards on light backgrounds
  - subtle shadow
  - soft border
  - rounded corners

- Section headers:
  - uppercase
  - centered
  - orange underline bar

## Responsive Behavior

- Header collapses naturally on smaller screens
- Hero stacks into a single column on tablet/mobile
- Product grid reduces from 7 columns to fewer columns on smaller widths
- Industries grid reduces to 4 columns, then 2, then 1
- Why Choose Us becomes 2 columns and then 1 column
- Contact section stacks vertically on narrow screens

## Reusable Page Template Guidance

When creating detail pages, follow these patterns:

- keep the same topbar and navbar
- reuse the same logo
- keep section title styling and orange underline
- use the same button styles
- use the same footer structure
- keep all icons in the same theme color
- preserve industrial orange/charcoal branding

## Recommended Inner Page Structure

For new pages, use this standard order:

1. Topbar
2. Navbar
3. Hero/banner
4. Page heading section
5. Content section with cards or text
6. Related section or CTA strip
7. Footer

## Notes for Future Expansion

- You can swap the generated SVG visuals for real images later without changing the structure
- Product detail pages should use the same card and title system
- Service or brand pages should follow the same section spacing and accent color
- Keep all new pages visually tied to this homepage design

