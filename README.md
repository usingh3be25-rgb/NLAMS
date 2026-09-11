# National Land Acquisition & Management System (NLAMS)
**Unified Digital Platform for Land Acquisition, Compensation, R&R and Project Monitoring**  
*Government of India • Interoperable Digital Infrastructure Prototype*

---

## 🌟 Executive Overview
The **National Land Acquisition & Management System (NLAMS)** is a unified, interoperable digital platform designed to bridge information silos across Central, State, and District government departments involved in mega-infrastructure development. 

Instead of replacing legacy government databases, NLAMS acts as an **interoperable digital spine** connecting departments using common **Project IDs** and **Parcel IDs**, establishing end-to-end traceability from initial land identification to final construction commissioning.

---

## 🏛️ Key Value Proposition
- **THE PROBLEM:** Land acquisition currently involves 9+ fragmented departments (Revenue, DLAA, Finance, R&R, Possession Authority, EPC Contractors) operating in disconnected silos. Disputed parcels, held-up compensation awards, and stalled possession frequently lead to multi-year project delays and ballooning contractor delay claims.
- **THE SOLUTION:** A unified interoperable digital platform that synchronizes cadastral land boundaries, statutory notifications, conciliation hearings, digital compensation awards, R&R entitlements, physical possession, and predictive analytics through common **Project IDs** (e.g. `PARK-001`) and **Parcel IDs** (e.g. `P-103`).
- **THE BENEFIT:** Real-time visibility, accelerated inter-departmental coordination, elimination of manual duplicate paperwork, transparent status tracking for citizens, and early identification of project delay risk via explainable AI.

---

## 🚀 How to Run Locally

### Option 1: One-Click Windows Launch (Recommended)
Simply double-click the **`start.bat`** file in the project folder:
```cmd
start.bat
```
*This launches the Python HTTP server and automatically opens your web browser to `http://localhost:5173/`.*

### Option 2: Python Command Line
Ensure Python 3.8+ is installed:
```powershell
cd C:\Users\asus\.gemini\antigravity\scratch\nlams
python server.py --open
```
Navigate to **`http://localhost:5173/`** in Chrome or Edge.

---

## ⏱️ 5-Minute Judge Demonstration Flow
Use this step-by-step narrative to present the prototype to judges. You can also click the **"Judge Demo Tour"** button in the top navigation bar to activate the interactive 14-step presentation bar inside the application!

1. **Official Login & Architecture:**
   - Demonstrate the Government of India portal login.
   - Highlight the Department selector (Central Ministry, State Govt, DLAA, Revenue, Finance, R&R).
   - Click **"Login to Demo"**.
2. **Executive Dashboard & Program Health:**
   - Review national KPIs: 24 Projects, 14 In Progress, 5 Delayed, 9,820 Acres Acquired, ₹1,245 Cr Paid via PFMS.
   - Point out **"THE PROBLEM / THE SOLUTION / THE BENEFIT"** value proposition banner.
3. **Projects Register:**
   - Open the searchable project table.
   - Filter by Risk Level or Status.
   - Locate primary demonstration project **`PARK-001` (Green City Government Park, Delhi)** flagged as **HIGH RISK**.
4. **Project Details & 15-Stage Lifecycle:**
   - Inspect the 100-acre project (40A Govt Land, 60A Requisitioned, ₹150 Cr Budget, 24 Months duration).
   - Walk through the visual **15-Stage Project Lifecycle Timeline** from Proposal to Commissioning.
   - Highlight that while stages 1–6 are completed, Stage 7 (Objections), 8–10 (Compensation), 11 (R&R), 12 (Possession), and 14 (Construction) are bottlenecked.
5. **Land Parcels Management:**
   - Inspect the 4 constituent parcels:
     - `P-101`: 20 Acres (Government Land, Available)
     - `P-102`: 25 Acres (Private Owner, Acquired, ₹28 Cr Paid)
     - `P-103`: 15 Acres (Owner C, **Acquisition Dispute**, Compensation & Possession Pending)
     - `P-104`: 40 Acres (Multiple Owners, Under Process, 75% Paid)
   - Click **Parcel P-103** to drill into the root cause.
6. **Parcel P-103 Deep-Dive:**
   - Show how P-103 has completed cadastral survey and ownership verification, but has triggered an **Acquisition Dispute** under Section 15.
   - Navigate tabs: Overview, Acquisition, Compensation, R&R, Possession, Documents, GIS Location.
7. **GIS Command Center:**
   - Interactive Leaflet map centered on Delhi (North West corridor).
   - Show the 100-acre purple project boundary and parcel polygons.
   - Highlight the **red pulsating disputed polygon of P-103** blocking contiguous connectivity between P-101, P-102, and P-104.
   - Click polygon to inspect popup and side drawer.
8. **District Land Acquisition Authority (DLAA):**
   - Review Section 15 objection petition filed by Owner C (contesting circle rate valuation and 1.2-acre access easement).
   - Show the scheduled conciliation hearing for 24-Sep-2026.
9. **Revenue Department (Land Records & Mutation):**
   - RoR (Record of Rights) and Jamabandi verified for Khewat 412.
   - Show that land mutation (Form-35) is on hold until statutory compensation award is completed.
10. **Compensation Dashboard (Finance):**
    - Show assessed ₹120 Cr → approved ₹100 Cr → disbursed ₹90 Cr.
    - Show that ₹25 Cr assessed for P-103 is held in abeyance in escrow due to the acquisition dispute.
11. **Rehabilitation & Resettlement (R&R):**
    - 120 affected families tracked.
    - Family `RF-002` (on P-103) is under review for commercial shop entitlements.
12. **Land Possession Dashboard:**
    - Physical handover of P-103 is blocked without Panchnama.
13. **Construction Progress & Idle Delay:**
    - EPC civil execution is stalled at **45%**.
    - Milestone M-3 (Structural works) is halted at the boundary of unpossessed Parcel P-103.
14. **Inter-Department Workflow (The Core Innovation):**
    - Visual node graph showing how **Project ID (`PARK-001`) + Parcel ID (`P-103`)** synchronizes state across all 9 departments simultaneously.
15. **Explainable AI Risk Engine:**
    - Transparent rule-based risk score: **Score 3 / HIGH RISK** (Possession < 80%, Compensation < 80%, Construction < 50%).
    - Review recommended executive interventions and the Future ML roadmap.

---

## 📂 Project Structure
```
nlams/
├── index.html                    # Single Page Application root
├── server.py                     # High-performance Python threading HTTP server
├── start.bat                     # Windows one-click launcher
├── bundle.jsx                    # Transpiled bundle for browser execution
├── README.md                     # Documentation and demonstration guide
└── src/
    ├── data/
    │   ├── projects.js           # Case study dataset (PARK-001, NH-001, RAIL-002)
    │   ├── parcels.js            # P-101, P-102, P-103, P-104 data
    │   ├── compensation.js       # Finance flow data (Assessed, Approved, Paid)
    │   ├── rr.js                 # 120 families, RF-001, RF-002
    │   ├── possession.js         # Panchnama and physical possession logs
    │   ├── construction.js       # 45% progress, milestones, delay causality
    │   ├── departments.js        # 9 connected departments with status mapping
    │   ├── documents.js          # Certified Gazette notifications, RoR, petitions
    │   ├── notifications.js      # Alert center logs
    │   └── analytics.js          # Rule-based risk engine scores & recommendations
    ├── components/
    │   ├── Icons.js              # Professional Government SVG icon library
    │   ├── Navbar.js             # Universal search, department switch, project switch
    │   ├── Sidebar.js            # 15-item desktop sidebar with status badges
    │   ├── KPICard.js            # Metric cards with trends and icons
    │   ├── StatusBadge.js        # Standardized government status chips
    │   ├── ProgressBar.js        # Multi-stage progress indicators
    │   ├── ProjectTimeline.js    # 15-stage project lifecycle visualizer
    │   ├── JudgeTourBar.js       # 14-step presentation controller
    │   └── Modal.js              # Action dialogs
    ├── pages/
    │   ├── Login.js              # Official GoI auth portal
    │   ├── Dashboard.js          # Executive dashboard with KPIs & Problem/Solution
    │   ├── Projects.js           # Projects directory & PARK-001 deep-dive
    │   ├── Parcels.js            # Land parcel directory & P-103 deep-dive
    │   ├── GIS.js                # Leaflet command map & DLAA acquisition
    │   ├── Revenue.js            # Jamabandi RoR & Compensation flow
    │   ├── RnR.js                # R&R dashboard & Possession authority
    │   ├── Construction.js       # EPC construction monitoring & Inter-department workflow
    │   ├── Documents.js          # Document management & Notifications dispatch
    │   └── Analytics.js          # AI Risk prediction, Reports, & Settings
    └── utils/
        └── helpers.js            # Currency formatters, risk score calculation
```

---

## 🛡️ Prototype Note
*This software is an interactive prototype developed for demonstration and hackathon evaluation. It utilizes realistic sample data and demonstrates how existing departmental systems can be federated using standard identifiers.*
