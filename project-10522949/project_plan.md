# Khu Vuon 2Hand Nha MC

## 1. Project Description
A responsive e-commerce website for a second-hand store called "Khu Vuon 2Hand Nha MC". The store sells pre-loved items with a natural, garden-inspired brand identity. Target users are Vietnamese shoppers looking for affordable second-hand goods. Core value: a clean, elegant, easy-to-navigate platform that reflects the store's warm, natural aesthetic.

Brand colors: green, beige, brown — garden-inspired palette.
Style: Clean, elegant, modern minimalism with natural tones.

## 2. Page Structure
- `/` - Home Page (hero banner, featured products, store intro, contact section)
- `/products` - Product Listing Page (grid layout with images, names, prices)
- `/product/:id` - Product Detail Page (large image, description, price, contact seller)
- `/about` - About Us Page (story, mission, values)
- `/contact` - Contact Page (Zalo, Messenger, email, phone)
- `/admin` - Admin Page (CRUD product management, requires login)

## 3. Core Features
- [ ] Home page with hero banner, featured products, store intro, contact CTA
- [ ] Product listing with responsive grid layout
- [ ] Product detail with full info and contact seller
- [ ] About Us page with store story
- [ ] Contact page with Zalo, Messenger, email, phone links
- [ ] User authentication (login/registration)
- [ ] Admin product management (upload, edit, delete)

## 4. Data Model Design

### Table: products
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | Primary key |
| name | text | Product name |
| description | text | Product description |
| price | numeric | Product price (VND) |
| image_url | text | Product image URL |
| category | text | Product category |
| condition | text | Condition (Like New, Good, Fair) |
| created_at | timestamptz | Creation timestamp |
| updated_at | timestamptz | Last updated timestamp |

### Table: profiles (extends Supabase auth.users)
| Field | Type | Description |
|-------|------|-------------|
| id | uuid | FK to auth.users |
| full_name | text | User's full name |
| phone | text | Phone number |
| avatar_url | text | Profile picture |
| created_at | timestamptz | Creation timestamp |

## 5. Backend / Third-party Integration Plan
- **Supabase**: Required — user authentication (login/registration), product database (CRUD), storage (product images)
- **Shopify**: Not needed
- **Stripe**: Not needed (contact-based purchasing, not online checkout)
- **Others**: Zalo & Messenger deep links for contact

## 6. Development Phase Plan

### Phase 1: Core UI Pages (Current)
- Goal: Build all 5 customer-facing pages with beautiful UI and mock data
- Deliverable: Home, Products, Product Detail, About Us, Contact pages fully designed and responsive

### Phase 2: Supabase Setup + Authentication
- Goal: Set up Supabase database and implement user login/registration
- Deliverable: Working auth system, database tables created

### Phase 3: Admin Page + Real Product Management
- Goal: Build admin dashboard with CRUD operations connected to Supabase
- Deliverable: Admin can upload, edit, delete products with real database

### Phase 4: Connect Frontend to Real Data
- Goal: Replace mock data with real Supabase data on customer-facing pages
- Deliverable: Full working e-commerce site with real products