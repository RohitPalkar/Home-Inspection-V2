import type { PhotoGuidanceEntry } from "@/types/survey";

export interface HelpSection {
  title: string;
  description: string;
  image?: { src: string; alt: string; fallbackSrc?: string[] };
  characteristics?: string[];
  identification?: string[];
}

export interface HelpEntry {
  title: string;
  description: string;
  image?: { src: string; alt: string; fallbackSrc?: string[] };
  tips?: string[];
  sections?: HelpSection[];
}

export interface HelpLinkConfig {
  id: string;
  label: string;
  entry: HelpEntry;
}

export const HELP: Record<string, HelpEntry> = {
  "panel-breaker": {
    title: "Breaker Panel",
    description:
      "Breaker panels could be located inside or outside your home and typically use circuit breakers to protect electrical circuits from overload.",
    image: {
      src: "/images/breaker-panel.webp",
      alt: "Breaker panel example",
      fallbackSrc: ["/images/breaker-panel.jpg", "/images/breaker-panel.jpeg"],
    },
  },
  "panel-fuse": {
    title: "Fuse Panel",
    description:
      "Fuse panels could be located inside or outside your home and use replaceable fuses instead of circuit breakers.",
    image: {
      src: "/images/fuse-panel.jpg",
      alt: "Fuse panel example",
      fallbackSrc: ["/images/fuse-panel.jpeg"],
    },
  },
  "heating-system": {
    title: "What is a heating system?",
    description:
      "A heating system is a mechanism that maintains temperature and comfort within a home by distributing warm air or heated water throughout the property. The type of fuel used affects efficiency, maintenance requirements, operating costs, and environmental impact.",
    sections: [
      {
        title: "Gas",
        description:
          "Natural gas heating systems burn natural gas to generate heat and are one of the most common heating methods in residential homes.",
        image: {
          src: "/images/help/gas-furnace.webp",
          alt: "Gas furnace showing burner assembly and gas supply line connections",
          fallbackSrc: ["/images/help/gas-furnace.jpg"],
        },
        characteristics: [
          "Connected to a natural gas line",
          "Often paired with a forced-air furnace",
          "Efficient and cost-effective",
          "Requires annual maintenance",
        ],
        identification: [
          "Gas meter located outside the home",
          "Furnace connected to a gas supply line",
          "Metal exhaust vent",
        ],
      },
      {
        title: "Electric",
        description:
          "Electric heating systems use electricity to generate heat and may include electric furnaces, baseboard heaters, or heat pumps.",
        image: {
          src: "/images/help/electric-heater.webp",
          alt: "Electric baseboard heater installed along a wall with visible wiring connections",
          fallbackSrc: ["/images/help/electric-heater.jpg"],
        },
        characteristics: [
          "No combustion fuel required",
          "Low maintenance",
          "Quiet operation",
          "Common in warmer climates",
        ],
        identification: [
          "Electric baseboard heaters",
          "Electric furnace",
          "No gas or oil supply",
          "Higher electrical demand",
        ],
      },
      {
        title: "Oil",
        description:
          "Oil heating systems burn heating oil stored in a fuel tank to provide heat throughout the home.",
        image: {
          src: "/images/help/oil-furnace.webp",
          alt: "Oil furnace with fuel line connected to an oil storage tank",
          fallbackSrc: ["/images/help/oil-furnace.jpg"],
        },
        characteristics: [
          "Fuel stored in an indoor or outdoor tank",
          "Common in colder climates",
          "Requires fuel deliveries",
          "Annual burner maintenance recommended",
        ],
        identification: [
          "Oil storage tank",
          "Oil burner",
          "Fuel fill pipe outside the home",
          "Chimney or vent pipe",
        ],
      },
      {
        title: "Propane",
        description:
          "Propane heating systems use propane gas stored in an above-ground or underground storage tank.",
        image: {
          src: "/images/help/propane-tank.webp",
          alt: "White propane storage tank located outdoors with regulator and supply line",
          fallbackSrc: ["/images/help/propane-tank.jpg"],
        },
        characteristics: [
          "Common in rural areas",
          "Delivered by a propane supplier",
          "Clean-burning fuel",
          "Tank located on the property",
        ],
        identification: [
          "White propane storage tank",
          "Propane regulator",
          "Supply line entering the home",
        ],
      },
    ],
    tips: [
      "If you are unsure which heating fuel your home uses, check the furnace area, utility room, home inspection report, or your utility bill.",
    ],
  },
  "gas-heating": {
    title: "Gas Heating System",
    description:
      "A gas heating system burns natural gas to produce heat. It is one of the most common and cost-effective heating methods in the United States, offering reliable warmth through forced air or hydronic systems.",
  },
  "gas-meter": {
    title: "Gas Meter",
    description:
      "A gas meter measures the volume of natural gas supplied to your property. It is typically located on the exterior of the home or in a utility area and is used by the gas company to track consumption.",
    image: {
      src: "/images/gas-meter.webp",
      alt: "Example of a gas meter",
      fallbackSrc: ["/images/gas-meter.jpg", "/images/gas-meter.jpeg"],
    },
  },
  "oil-heating": {
    title: "Oil Heating System",
    description:
      "An oil heating system uses heating oil stored in a tank to produce heat. Common in the northeastern United States, these systems require regular oil deliveries and tank maintenance to operate efficiently.",
  },
  "underground-oil-tank": {
    title: "Underground Oil Tank",
    description:
      "An underground oil tank is a storage tank buried below ground level that holds heating oil. These tanks require specialized inspection since leaks can cause environmental contamination and property damage.",
    image: {
      src: "/images/underground-oil-tank.webp",
      alt: "Underground oil tank diagram",
      fallbackSrc: ["/images/underground-oil-tank.jpg"],
    },
  },
  "electric-heating": {
    title: "Electric Heating",
    description:
      "Electric heating systems convert electrical energy directly into heat. They are widely available, do not require on-site fuel storage, and can be installed as baseboard heaters, wall units, or central systems.",
  },
  "electric-baseboard": {
    title: "Electric Baseboard Heating",
    description:
      "Electric baseboard heaters are individual heating units installed along the baseboard of a room. Each unit operates independently and uses electrical resistance coils to generate warmth.",
    image: {
      src: "/images/electric-baseboard.webp",
      alt: "Electric baseboard heater example",
      fallbackSrc: ["/images/electric-baseboard.jpg"],
    },
  },
  "propane-heating": {
    title: "Propane Heating System",
    description:
      "A propane heating system uses liquefied petroleum gas (propane) stored in a tank to produce heat. It is common in rural homes without access to natural gas lines.",
  },
  "propane-tank-location": {
    title: "Propane Tank Location",
    description:
      "Propane tanks can be installed above ground or below ground. Above-ground tanks are typically placed in a side or back yard, while underground tanks are buried to save space and improve aesthetics. Each option has specific safety and maintenance requirements.",
    image: {
      src: "/images/propane-tank.webp",
      alt: "Propane tank installation example",
      fallbackSrc: ["/images/propane-tank.jpg"],
    },
  },
  "wiring-types": {
    title: "What are the different wiring types?",
    description:
      'The wiring in your home is primarily located inside the walls and hidden from view. It is often visible in unfinished areas such as a garage or basement. If you are unable to visibly verify the wiring type, please select "Unknown".',
    sections: [
      {
        title: "Romex",
        description:
          "The most common wiring type in modern homes. Identified by its rubber outer casing which could be white, grey, black or yellow.",
        image: {
          src: "/images/help/romex-wiring.webp",
          alt: "Romex electrical cable showing PVC outer sheath and inner insulated wires",
          fallbackSrc: ["/images/help/romex-wiring.jpg"],
        },
        characteristics: [
          "Non-metallic sheathed cable",
          "Most common in homes built after 1960",
          "Available in various gauge sizes",
          "Used for general-purpose circuits",
        ],
        identification: [
          "Flat, rectangular cable shape",
          "PVC or rubber outer jacket",
          "Label printed on the outer sheath",
        ],
      },
      {
        title: "BX (Armored Cable)",
        description:
          "BX wiring, also known as armored cable, has a flexible metal outer covering that protects the inner wires. It is commonly found in older and modern homes.",
        image: {
          src: "/images/help/bx-wiring.webp",
          alt: "BX armored cable showing spiral-wound metal sheath and interior insulated wires",
          fallbackSrc: ["/images/help/bx-wiring.jpg"],
        },
        characteristics: [
          "Flexible metal armor protection",
          "Common in both old and new construction",
          "Provides physical protection for wires",
          "Used in exposed locations like basements",
        ],
        identification: [
          "Spiral-wrapped metal exterior",
          "Silver or gray metallic color",
          "Metal connector at junction boxes",
        ],
      },
      {
        title: "Conduit",
        description:
          "Conduit is a rigid or flexible metal or plastic tube that protects individual electrical wires. It is commonly used in commercial buildings and modern residential construction.",
        image: {
          src: "/images/help/conduit-wiring.webp",
          alt: "Electrical conduit showing metal pipes with wires running through them",
          fallbackSrc: ["/images/help/conduit-wiring.jpg"],
        },
        characteristics: [
          "Rigid or flexible tubing",
          "Individual wires pulled through",
          "Most common in commercial buildings",
          "Provides excellent wire protection",
        ],
        identification: [
          "Metal or PVC tubes running along walls or ceilings",
          "Wires not visible — contained inside tubes",
          "Fittings and couplings at connections",
        ],
      },
      {
        title: "Knob and Tube",
        description:
          "Knob and tube wiring was commonly used in homes built from 1900 to 1940. It consists of ceramic knobs and tubes that secure individual copper wires.",
        image: {
          src: "/images/help/knob-tube-wiring.webp",
          alt: "Knob and tube wiring showing white ceramic knobs and tubes with exposed copper wires",
          fallbackSrc: ["/images/help/knob-tube-wiring.jpg"],
        },
        characteristics: [
          "Found in pre-1940 homes",
          "Individual wires, not a bundled cable",
          "No ground wire present",
          "May be a fire risk if damaged or modified",
        ],
        identification: [
          "White ceramic knobs attached to joists",
          "Ceramic tubes where wires pass through wood",
          "Wires are separate, not bundled together",
          "No outer sheathing on individual wires",
        ],
      },
      {
        title: "Aluminum",
        description:
          "Aluminum wiring was commonly used in homes built from 1960 to 1979. It looks similar to Romex but requires special connectors and installation methods.",
        image: {
          src: "/images/help/aluminum-wiring.webp",
          alt: "Aluminum electrical cable with stamped markings identifying it as aluminum wiring",
          fallbackSrc: ["/images/help/aluminum-wiring.jpg"],
        },
        characteristics: [
          "Used in homes built 1960-1979",
          "Requires special CO/ALR connectors",
          "Higher failure rate at connections",
          "May need professional inspection",
        ],
        identification: [
          "Stamped with 'ALUMINUM', 'ALCAN', or 'AL/2'",
          "Silver-colored wire ends",
          "Similar appearance to Romex but labeled",
        ],
      },
      {
        title: "Other",
        description:
          'If your wiring does not match any of the common types described above, select "Other". This includes specialty wiring, old systems, or unique installations.',
        characteristics: [
          "Does not match standard categories",
          "May be a specialty or regional type",
          "May include older unclassified systems",
        ],
        identification: [
          "Wiring that doesn't match Romex, BX, conduit, knob and tube, or aluminum",
          "Unusual color, shape, or material",
        ],
      },
    ],
    tips: [
      "Check exposed wiring in the basement, attic, garage, or behind the electrical panel cover.",
      'If you cannot identify the wiring type, select "Unknown" — this is better than guessing incorrectly.',
    ],
  },
  "knob-tube-wiring": {
    title: "What is knob and tube wiring?",
    description:
      "Knob and tube wiring is an early electrical wiring method used in homes built from approximately 1900 to 1940. It consists of individual copper wires supported by white ceramic knobs and protected by ceramic tubes where passing through wood framing.",
    image: {
      src: "/images/help/knob-tube-wiring.webp",
      alt: "Knob and tube wiring with ceramic knobs and tubes on wooden joists",
      fallbackSrc: ["/images/help/knob-tube-wiring.jpg"],
    },
    tips: [
      "Knob and tube wiring lacks a ground wire and may not be compatible with modern three-prong outlets.",
      "It should be inspected by a licensed electrician, especially if you notice fraying, damage, or modifications.",
      "Many insurance companies require inspection or replacement of knob and tube wiring.",
    ],
  },
  "aluminum-wiring": {
    title: "What is aluminum wiring?",
    description:
      "Aluminum wiring was used in residential construction from approximately 1960 to 1979. It appears similar to Romex but is marked with identifying text. Aluminum wiring requires special connectors and installation methods to reduce fire risk.",
    image: {
      src: "/images/help/aluminum-wiring.webp",
      alt: "Aluminum wiring cable with stamped identification and silver-colored wire ends",
      fallbackSrc: ["/images/help/aluminum-wiring.jpg"],
    },
    tips: [
      "Look for markings on the cable sheath such as 'ALUMINUM', 'ALCAN', or 'AL/2'.",
      "Aluminum wiring requires special CO/ALR rated outlets and switches.",
      "Have aluminum wiring inspected by a licensed electrician if you have concerns.",
      "Pigtailing with copper wire using approved connectors is a common remediation method.",
    ],
  },
  "dwelling-type": {
    title: "What is a dwelling type?",
    description:
      "A dwelling type describes how a home is occupied. The occupancy type affects insurance requirements, coverage options, and risk assessment. Select the option that best describes your current living situation.",
    sections: [
      {
        title: "Owner Occupied",
        description:
          "Choose this option if the home is currently furnished or occupied, or if it will be furnished or occupied within 90 days of the policy issue date.",
        characteristics: [
          "Primary residence of the policyholder",
          "Furnished and ready for occupancy",
          "May be full-time or secondary/vacation home",
        ],
        identification: [
          "You or a family member lives at this address",
          "Personal belongings and furniture are present",
          "Mail is received at this address",
        ],
      },
      {
        title: "Rental - Tenant Occupied",
        description:
          "Choose this option if the home is a rental property that is currently occupied by a tenant, or will be tenant-occupied within 90 days of the policy issue date.",
        characteristics: [
          "Property is leased to a tenant",
          "Tenant pays rent to the property owner",
          "May be standard or short-term rental",
        ],
        identification: [
          "A lease or rental agreement is in place",
          "Tenant's belongings are in the home",
          "Utilities may be in the tenant's name",
        ],
      },
      {
        title: "Vacant",
        description:
          "Choose this option if the home is currently unfurnished or unoccupied, and will not be furnished or occupied within 90 days of the policy issue date.",
        characteristics: [
          "No one is living in the home",
          "Furniture and personal belongings may be removed",
          "Utilities may be disconnected",
        ],
        identification: [
          "No personal belongings in the home",
          "No active lease or occupancy agreement",
          "Property is between tenants or owners",
        ],
      },
    ],
    tips: [
      "If you are unsure, consider whether anyone is currently living at the property and whether furniture or personal belongings are present.",
    ],
  },
  "plumbing-material": {
    title: "What is plumbing material?",
    description:
      "Plumbing material refers to the type of pipe used for the water supply lines in your home. Different materials have different lifespans, maintenance requirements, and insurance considerations.",
    sections: [
      {
        title: "Copper",
        description:
          "Copper piping is durable, corrosion-resistant, and has been the standard for residential plumbing for decades. It is typically found in homes built from the 1960s through the early 2000s.",
        image: {
          src: "/images/help/copper-pipe.webp",
          alt: "Copper water pipe showing characteristic reddish-brown color and soldered joints",
          fallbackSrc: ["/images/help/copper-pipe.jpg"],
        },
        characteristics: [
          "Long lifespan (50+ years)",
          "Resistant to corrosion",
          "Can withstand high water pressure",
          "Recyclable material",
        ],
        identification: [
          "Reddish-brown metallic color",
          "Soldered joints with visible silver-colored solder",
          "Rigid pipes that hold their shape",
        ],
      },
      {
        title: "PEX",
        description:
          "PEX (cross-linked polyethylene) is a flexible plastic piping commonly used in modern construction and home renovations.",
        image: {
          src: "/images/help/pex-pipe.webp",
          alt: "Flexible PEX pipe in red and blue indicating hot and cold water lines",
          fallbackSrc: ["/images/help/pex-pipe.jpg"],
        },
        characteristics: [
          "Flexible and easy to install",
          "Resistant to freezing damage",
          "Does not corrode",
          "Color-coded (red for hot, blue for cold)",
        ],
        identification: [
          "Flexible plastic tubing",
          "Red, blue, or white color",
          "Crimp or clamp ring connections at fittings",
        ],
      },
      {
        title: "PVC",
        description:
          "PVC (polyvinyl chloride) is a rigid white plastic pipe commonly used for drain, waste, and vent lines rather than supply lines.",
        image: {
          src: "/images/help/pvc-pipe.webp",
          alt: "White PVC pipe with visible diameter markings and fittings",
          fallbackSrc: ["/images/help/pvc-pipe.jpg"],
        },
        characteristics: [
          "Lightweight and durable",
          "Chemical resistant",
          "Low cost",
          "Primarily used for drainage",
        ],
        identification: [
          "White or cream-colored rigid plastic",
          "Diameter printed on the pipe",
          "Glued joints with primer and cement",
        ],
      },
      {
        title: "Galvanized",
        description:
          "Galvanized steel pipes were commonly used in homes built before the 1960s and are prone to corrosion and mineral buildup over time.",
        image: {
          src: "/images/help/galvanized-pipe.webp",
          alt: "Galvanized steel pipe showing gray metallic surface with threaded connections",
          fallbackSrc: ["/images/help/galvanized-pipe.jpg"],
        },
        characteristics: [
          "Prone to rust and corrosion over time",
          "Mineral buildup can reduce water flow",
          "Heavy and difficult to repair",
          "Typical lifespan of 40-50 years",
        ],
        identification: [
          "Gray metallic color",
          "Threaded connections at joints",
          "Magnetic (steel construction)",
          "Often found in older homes",
        ],
      },
      {
        title: "Polybutylene",
        description:
          "Polybutylene was a gray or black flexible plastic pipe used from the 1970s to the 1990s. It is known for premature failure and is no longer approved for use.",
        image: {
          src: "/images/help/polybutylene-pipe.webp",
          alt: "Gray polybutylene pipe with distinctive fittings and markings",
          fallbackSrc: ["/images/help/polybutylene-pipe.jpg"],
        },
        characteristics: [
          "Prone to cracking and leaking",
          "Susceptible to chlorine degradation",
          "No longer used in new construction",
          "Often requires full replacement",
        ],
        identification: [
          "Gray or black flexible plastic",
          "Stamped with 'PB' or 'polybutylene'",
          "Metal or plastic insert fittings",
        ],
      },
    ],
    tips: [
      "Check exposed pipes in the basement, crawlspace, or under sinks. The material is usually visible where pipes enter the water heater or main shutoff valve.",
    ],
  },
  "protective-devices": {
    title: "What are protective devices?",
    description:
      "Protective devices refer to the electrical capacity and safety equipment installed in your home's electrical panel. The amperage rating indicates how much electrical load your home can safely handle.",
    sections: [
      {
        title: "60 Amp Service",
        description:
          "60 amp service is typical for older homes or small apartments with limited electrical needs. It may be insufficient for modern appliances and electronics.",
        characteristics: [
          "Common in pre-1950 homes",
          "Supports basic lighting and outlets",
          "May not support modern HVAC or appliances",
          "Often requires upgrade for additions",
        ],
        identification: [
          "Main breaker or fuse block labeled '60'",
          "Smaller panel size",
          "Limited number of branch circuits",
        ],
      },
      {
        title: "100 Amp Service",
        description:
          "100 amp service is the minimum standard for most modern single-family homes and can support typical household appliances and lighting.",
        characteristics: [
          "Standard for most 20th century homes",
          "Supports major appliances",
          "Adequate for most households",
          "May be tight for large homes with multiple AC units",
        ],
        identification: [
          "Main breaker labeled '100'",
          "Medium-sized panel box",
          "12-20 branch circuits typical",
        ],
      },
      {
        title: "150 Amp Service",
        description:
          "150 amp service provides additional capacity for larger homes or those with higher electrical demands.",
        characteristics: [
          "Common in larger modern homes",
          "Supports multiple major appliances",
          "Accommodates central air conditioning",
          "Room for future additions",
        ],
        identification: [
          "Main breaker labeled '150'",
          "Larger panel box",
          "20-30 branch circuits typical",
        ],
      },
      {
        title: "200 Amp Service",
        description:
          "200 amp service is the current standard for new home construction and provides ample capacity for all typical household needs.",
        characteristics: [
          "Modern standard for new construction",
          "Supports all major appliances and HVAC",
          "Accommodates electric vehicle charging",
          "Supports home additions and renovations",
        ],
        identification: [
          "Main breaker labeled '200'",
          "Large panel box",
          "30-40 branch circuits typical",
        ],
      },
      {
        title: "200+ Amp Service",
        description:
          "200+ amp service (typically 400 amp) is used for very large homes, properties with multiple buildings, or homes with significant electrical demands.",
        characteristics: [
          "Used in large custom homes",
          "Supports multiple HVAC systems",
          "Accommodates workshops or outbuildings",
          "Handles heavy electrical loads",
        ],
        identification: [
          "Main breaker labeled '400' or higher",
          "Extra-large panel or multiple panels",
          "May have a separate meter",
        ],
      },
    ],
    tips: [
      "Check the main breaker or fuse in your electrical panel. The amperage rating should be clearly printed on the main disconnect handle or label.",
    ],
  },
  "roof-age": {
    title: "What is roof age?",
    description:
      "Roof age refers to how long ago your roof was installed or last replaced. The age of your roof affects your insurance premium and coverage eligibility, as older roofs are more susceptible to damage.",
    sections: [
      {
        title: "≤ 5 Years Ago",
        description:
          "A roof that is 5 years old or newer is considered new and in optimal condition. Most insurance companies offer the best rates for newer roofs.",
        characteristics: [
          "Full remaining useful life",
          "Minimal maintenance issues expected",
          "Best insurance rates available",
          "Still under manufacturer warranty in many cases",
        ],
        identification: [
          "Check your home purchase or renovation records",
          "Look for permits issued for roof replacement",
          "Contact the previous owner or builder",
        ],
      },
      {
        title: "5-10 Years",
        description:
          "A roof between 5 and 10 years old is still in good condition but has begun normal aging. Regular maintenance is recommended.",
        characteristics: [
          "Moderate wear from weather exposure",
          "Minor maintenance may be needed",
          "Most shingles still under warranty",
          "Good insurance rates typically available",
        ],
        identification: [
          "Review home improvement records",
          "Check with the roofing contractor if known",
          "Look for visible signs of aging like curling edges",
        ],
      },
      {
        title: "10-20 Years",
        description:
          "A roof between 10 and 20 years old is approaching the midpoint of its expected lifespan for asphalt shingles. Insurance rates may increase.",
        characteristics: [
          "Significant wear from weather exposure",
          "Higher risk of leaks and damage",
          "May require repairs before insurance renewal",
          "Some insurers may require inspection",
        ],
        identification: [
          "Visible granule loss in gutters",
          "Curling or missing shingles",
          "Check original roof installation documents",
        ],
      },
      {
        title: "20+ Years",
        description:
          "A roof that is more than 20 years old is beyond the typical lifespan for asphalt shingles and may be difficult to insure without inspection.",
        characteristics: [
          "Beyond standard shingle lifespan",
          "High risk of leaks and structural damage",
          "Insurance may require inspection or replacement",
          "Limited coverage options available",
        ],
        identification: [
          "Multiple layers of shingles visible",
          "Sagging or uneven roofline",
          "Frequent leaks or water stains on ceilings",
        ],
      },
    ],
    tips: [
      "If you are unsure of your roof age, check your home purchase documents, ask the previous owner, or contact a local roofing company for an assessment.",
    ],
  },
  "foundation-type": {
    title: "What is foundation type?",
    description:
      "Foundation type describes the structure beneath your home. The type of foundation affects the home's stability, moisture protection, and insurance considerations.",
    sections: [
      {
        title: "Finished Basement",
        description:
          "A finished basement has been remodeled into livable space with walls, flooring, and often includes additional rooms, bathrooms, or entertainment areas.",
        characteristics: [
          "Living space below the main floor",
          "Insulated and finished walls",
          "Heated and cooled area",
          "May include bedrooms or bathrooms",
        ],
        identification: [
          "Drywall or paneling on basement walls",
          "Finished flooring (carpet, tile, laminate)",
          "Ceiling may be finished or drop ceiling",
          "Furniture and personal belongings present",
        ],
      },
      {
        title: "Unfinished Basement",
        description:
          "An unfinished basement has not been remodeled and typically has exposed concrete walls, flooring, and open ceiling joists. It is commonly used for storage, utilities, and mechanical systems.",
        characteristics: [
          "Exposed concrete or block walls",
          "Concrete floor",
          "Open ceiling with exposed joists",
          "Houses mechanical equipment",
        ],
        identification: [
          "No drywall or finished walls",
          "Exposed insulation between joists",
          "Utility areas and storage",
          "Concrete floor without finished flooring",
        ],
      },
      {
        title: "No Basement",
        description:
          "A home with no basement may be built on a crawlspace or concrete slab. These homes have no below-grade living or storage area.",
        characteristics: [
          "No underground level",
          "May have crawlspace access",
          "Slab-on-grade construction",
          "Mechanical systems on main level or in attic",
        ],
        identification: [
          "No stairway leading down",
          "All rooms on ground level or above",
          "Exterior access to crawlspace if present",
        ],
      },
    ],
    tips: [
      "If you have a basement, check whether the walls are finished with drywall or remain as exposed concrete or block. This determines whether it is finished or unfinished.",
    ],
  },
  "swimming-pool-enclosure": {
    title: "What is a swimming pool enclosure?",
    description:
      "A swimming pool enclosure is a safety barrier designed to prevent unsupervised access to the pool area. Proper enclosures are critical for safety and are often required by local building codes and insurance policies.",
    image: {
      src: "/images/help/pool-enclosure.webp",
      alt: "Swimming pool with a safety fence and self-closing gate around the perimeter",
      fallbackSrc: ["/images/help/pool-enclosure.jpg"],
    },
    tips: [
      "Pool enclosures should be at least 4 feet tall with no gaps larger than 4 inches.",
      "Gates must be self-closing and self-latching.",
      "Enclosures should not have any footholds or handholds that could help a child climb over.",
      "Check local building codes for specific requirements in your area.",
    ],
  },
  "pool-safety-enclosure": {
    title: "What is a pool safety enclosure?",
    description:
      "A pool safety enclosure is a fence, wall, or barrier that surrounds your swimming pool to prevent unauthorized access. Insurance companies require safety enclosures to reduce the risk of accidents and liability.",
    image: {
      src: "/images/help/pool-safety-fence.webp",
      alt: "Pool safety fence with a self-closing gate and latch mechanism clearly visible",
      fallbackSrc: ["/images/help/pool-safety-fence.jpg"],
    },
    tips: [
      "The enclosure must completely surround the pool area.",
      "Gates must open outward and close automatically.",
      "Latches should be above the reach of small children.",
      "Regularly inspect the fence for gaps, damage, or wear.",
    ],
  },
  "wood-burning-fireplace": {
    title: "What is a wood-burning fireplace?",
    description:
      "A wood-burning fireplace is a traditional heating feature that burns wood logs for heat and ambiance. Wood-burning fireplaces require regular maintenance and inspection to ensure safe operation.",
    image: {
      src: "/images/help/wood-fireplace.webp",
      alt: "Wood-burning fireplace with brick hearth, firebox, and chimney visible",
      fallbackSrc: ["/images/help/wood-fireplace.jpg"],
    },
    tips: [
      "Have your chimney inspected and cleaned annually by a certified professional.",
      "Use only seasoned, dry wood to reduce creosote buildup.",
      "Install a chimney cap to prevent animals and debris from entering.",
      "Keep a fire extinguisher nearby and install carbon monoxide detectors.",
    ],
  },
};

export const PHOTO_GUIDANCE: Record<string, PhotoGuidanceEntry> = {
  "front-exterior": {
    title: "Front Exterior Photo",
    purpose:
      "We use this photo to verify the overall condition and appearance of the front of your home, including the facade, entryway, and front yard.",
    steps: [
      "Stand approximately 20–30 feet from the front of the house.",
      "Capture the entire front elevation from ground to roofline.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move closer if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/front-exterior-good.webp",
      alt: "Front exterior photo showing the entire front of the house with good lighting and clear details",
      caption: "Entire front visible, sharp image, good lighting, level horizon.",
      fallbackSrc: ["/images/photo-guide/front-exterior-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/front-exterior-bad.webp",
      alt: "Front exterior photo that is too close and cropped, missing the roofline",
      caption: "Too close — roofline cropped, blurry, heavy shadows.",
      fallbackSrc: ["/images/photo-guide/front-exterior-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Remove vehicles or obstacles blocking the view.",
      "Avoid strong sunlight directly behind the home.",
      "Clean your camera lens before taking photos.",
    ],
    commonMistakes: [
      "Standing too close — the full elevation must be visible.",
      "Taking photos at night or in dim lighting.",
      "Including people or animals in the frame.",
      "Blurry images from unsteady hands.",
    ],
  },
  "rear-exterior": {
    title: "Rear Exterior Photo",
    purpose:
      "We use this photo to verify the condition of the rear of your home, including the back facade, deck or patio, and rear yard.",
    steps: [
      "Stand approximately 20–30 feet from the rear of the house.",
      "Capture the entire rear elevation from ground to roofline.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move closer if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/rear-exterior-good.webp",
      alt: "Rear exterior photo showing the full back of the house with clear details",
      caption: "Full rear elevation visible, good lighting, sharp focus.",
      fallbackSrc: ["/images/photo-guide/rear-exterior-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/rear-exterior-bad.webp",
      alt: "Rear exterior photo obstructed by trees and heavy shadows",
      caption: "Trees blocking the view, heavy shadows, image too dark.",
      fallbackSrc: ["/images/photo-guide/rear-exterior-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Remove patio furniture or debris blocking the view.",
      "Avoid taking photos during midday harsh shadows.",
      "Make sure the entire rear wall is visible.",
    ],
    commonMistakes: [
      "Standing too close — the full elevation must be visible.",
      "Obstructions like trees, vehicles, or furniture in the frame.",
      "Taking photos in low light or at night.",
      "Angled shots that distort the perspective.",
    ],
  },
  "left-exterior": {
    title: "Left Side Exterior Photo",
    purpose:
      "We use this photo to verify the condition of the left side of your home, including siding, windows, and any side entrances.",
    steps: [
      "Stand approximately 20–30 feet from the left side of the house.",
      "Capture the entire side elevation from ground to roofline.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move closer if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/left-exterior-good.webp",
      alt: "Left side exterior photo showing the full side elevation clearly",
      caption: "Full side elevation visible, clear details, good lighting.",
      fallbackSrc: ["/images/photo-guide/left-exterior-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/left-exterior-bad.webp",
      alt: "Left side exterior photo that is too close and cropped",
      caption: "Too close — roof and foundation cropped, poor angle.",
      fallbackSrc: ["/images/photo-guide/left-exterior-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Stand back far enough to capture the full side.",
      "Avoid fences or landscaping that block the view.",
      "Ensure the entire roofline is visible.",
    ],
    commonMistakes: [
      "Standing too close — the full elevation must be visible.",
      "Angled shots that distort the perspective.",
      "Overhanging branches blocking the view.",
      "Dark shadows from nearby structures.",
    ],
  },
  "right-exterior": {
    title: "Right Side Exterior Photo",
    purpose:
      "We use this photo to verify the condition of the right side of your home, including siding, windows, and any side entrances.",
    steps: [
      "Stand approximately 20–30 feet from the right side of the house.",
      "Capture the entire side elevation from ground to roofline.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move closer if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/right-exterior-good.webp",
      alt: "Right side exterior photo showing the full side elevation clearly",
      caption: "Full side elevation visible, clear details, good lighting.",
      fallbackSrc: ["/images/photo-guide/right-exterior-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/right-exterior-bad.webp",
      alt: "Right side exterior photo that is blurry and poorly lit",
      caption: "Blurry image, poor lighting, roof not fully visible.",
      fallbackSrc: ["/images/photo-guide/right-exterior-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Stand back far enough to capture the full side.",
      "Avoid fences or landscaping that block the view.",
      "Ensure the entire roofline is visible.",
    ],
    commonMistakes: [
      "Standing too close — the full elevation must be visible.",
      "Blurry images from unsteady hands.",
      "Taking photos during golden hour with long shadows.",
      "Including neighboring properties in the frame.",
    ],
  },
  "roof-overview": {
    title: "Roof Overview Photo",
    purpose:
      "We use this photo to verify the overall condition of your roof, including shingles, flashing, and any visible damage.",
    steps: [
      "Stand approximately 30–40 feet from the house.",
      "Capture the entire roof in a single wide shot.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move farther back if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/roof-overview-good.webp",
      alt: "Roof overview showing the entire roof with clear details and good lighting",
      caption: "Entire roof visible, good lighting, sharp focus, no obstructions.",
      fallbackSrc: ["/images/photo-guide/roof-overview-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/roof-overview-bad.webp",
      alt: "Roof overview that is cropped and partially blocked by trees",
      caption: "Roof cropped, trees blocking sections, heavy shadows.",
      fallbackSrc: ["/images/photo-guide/roof-overview-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Move far enough back to capture the entire roofline.",
      "Avoid taking photos when the sun is directly behind the roof.",
      "Clean your camera lens before taking photos.",
    ],
    commonMistakes: [
      "Standing too close — the full roof must be visible.",
      "Trees or other obstructions blocking the view.",
      "Taking photos at night or in dim lighting.",
      "Zooming in — move closer instead.",
    ],
  },
  "electrical-panel": {
    title: "Electrical Panel Photo",
    purpose:
      "We use this photo to verify the type, condition, and labeling of your electrical panel.",
    steps: [
      "Open the electrical panel door.",
      "Stand directly in front of the panel.",
      "Capture the entire panel including all breakers or fuses.",
      "Ensure the photo is well-lit and readable.",
      "Take a second close-up of the panel label if visible.",
    ],
    goodExample: {
      src: "/images/photo-guide/electrical-panel-good.webp",
      alt: "Electrical panel with the door open showing all breakers clearly",
      caption: "Panel fully visible, all breakers clear, good lighting, label readable.",
      fallbackSrc: ["/images/photo-guide/electrical-panel-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/electrical-panel-bad.webp",
      alt: "Electrical panel photo that is dark and blurry",
      caption: "Too dark, blurry, breakers not distinguishable.",
      fallbackSrc: ["/images/photo-guide/electrical-panel-bad.jpg"],
    },
    tips: [
      "Use flash if the panel is in a dark area.",
      "Portrait orientation works best for tall panels.",
      "Make sure the panel label with amperage rating is visible.",
      "Close other panels or doors that cause reflections.",
    ],
    commonMistakes: [
      "Taking the photo with the panel door closed.",
      "Standing too close — the entire panel must fit in frame.",
      "Glare from overhead lights on the panel cover.",
      "Blurry images from unsteady hands.",
    ],
  },
  "hvac-system": {
    title: "HVAC System Photo",
    purpose:
      "We use this photo to verify the type, condition, and location of your heating and cooling system.",
    steps: [
      "Locate the HVAC unit (furnace, boiler, or heat pump).",
      "Stand far enough back to capture the entire unit.",
      "Capture the manufacturer label if visible.",
      "Take the photo in a well-lit area.",
      "Include surrounding area for context.",
    ],
    goodExample: {
      src: "/images/photo-guide/hvac-system-good.webp",
      alt: "HVAC system showing the entire unit with visible manufacturer label",
      caption: "Full unit visible, label readable, good lighting, clear surroundings.",
      fallbackSrc: ["/images/photo-guide/hvac-system-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/hvac-system-bad.webp",
      alt: "HVAC system photo that is too close and cluttered",
      caption: "Too close — unit cropped, clutter in frame, poor lighting.",
      fallbackSrc: ["/images/photo-guide/hvac-system-bad.jpg"],
    },
    tips: [
      "Clear clutter around the unit before taking the photo.",
      "Use flash in dark basements or utility closets.",
      "Take a separate close-up of the model/serial number label.",
      "Include the ductwork or piping connections.",
    ],
    commonMistakes: [
      "Standing too close — the full unit must be visible.",
      "Clutter or stored items blocking the view.",
      "Dark or shadowed images in utility areas.",
      "Forgetting to capture the manufacturer label.",
    ],
  },
  "water-heater": {
    title: "Water Heater Photo",
    purpose: "We use this photo to verify the type, size, and condition of your water heater.",
    steps: [
      "Locate the water heater.",
      "Stand far enough back to capture the entire unit.",
      "Capture the manufacturer label with model/serial number.",
      "Take the photo in a well-lit area.",
      "Include the piping connections at the top.",
    ],
    goodExample: {
      src: "/images/photo-guide/water-heater-good.webp",
      alt: "Water heater showing the full unit with visible label and connections",
      caption: "Full unit visible, label readable, piping connections clear.",
      fallbackSrc: ["/images/photo-guide/water-heater-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/water-heater-bad.webp",
      alt: "Water heater photo that is cropped and dark",
      caption: "Cropped — top connections cut off, dark image, no label visible.",
      fallbackSrc: ["/images/photo-guide/water-heater-bad.jpg"],
    },
    tips: [
      "Use flash in dark utility rooms.",
      "Portrait orientation works best for tall water heaters.",
      "Take a separate close-up of the rating label.",
      "Include the pressure relief valve and discharge pipe.",
    ],
    commonMistakes: [
      "Standing too close — the full unit must be visible.",
      "Dark or shadowed images in utility areas.",
      "Obstructions like boxes or shelves in the frame.",
      "Not showing the piping connections.",
    ],
  },
  kitchen: {
    title: "Kitchen Photo",
    purpose:
      "We use this photo to verify the condition of your kitchen, including countertops, cabinetry, appliances, and plumbing fixtures.",
    steps: [
      "Stand in the doorway or entrance to the kitchen.",
      "Capture the entire kitchen in a wide shot.",
      "Take additional photos of each counter and appliance area.",
      "Ensure the room is well-lit.",
      "Include sink, stove, and refrigerator in at least one photo.",
    ],
    goodExample: {
      src: "/images/photo-guide/kitchen-good.webp",
      alt: "Wide kitchen shot showing countertops, cabinets, and appliances clearly",
      caption: "Full kitchen visible, good lighting, all major appliances shown.",
      fallbackSrc: ["/images/photo-guide/kitchen-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/kitchen-bad.webp",
      alt: "Kitchen photo that is too close and cluttered",
      caption: "Too close — only partial view, cluttered counters, poor angle.",
      fallbackSrc: ["/images/photo-guide/kitchen-bad.jpg"],
    },
    tips: [
      "Turn on all lights before taking photos.",
      "Landscape orientation preferred for wide shots.",
      "Clear countertops of clutter when possible.",
      "Take multiple photos from different angles.",
    ],
    commonMistakes: [
      "Standing too close — the full kitchen must be visible.",
      "Cluttered counters obscuring the space.",
      "Dark or shadowed areas from poor lighting.",
      "Only taking one photo — multiple angles are needed.",
    ],
  },
  bathroom: {
    title: "Bathroom Photo",
    purpose:
      "We use this photo to verify the condition of your bathroom, including fixtures, ventilation, and overall condition.",
    steps: [
      "Stand in the doorway to capture the full bathroom.",
      "Show the sink, toilet, shower or tub in the frame.",
      "Take a close-up of the vanity and counter area.",
      "Ensure the room is well-lit.",
      "Include any exhaust fan or window.",
    ],
    goodExample: {
      src: "/images/photo-guide/bathroom-good.webp",
      alt: "Bathroom showing all fixtures clearly with good lighting",
      caption: "Full bathroom visible, all fixtures shown, good lighting, clean.",
      fallbackSrc: ["/images/photo-guide/bathroom-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/bathroom-bad.webp",
      alt: "Bathroom photo that is dark and partially blocked",
      caption: "Dark image, toilet partially blocked, mirror reflection causes glare.",
      fallbackSrc: ["/images/photo-guide/bathroom-bad.jpg"],
    },
    tips: [
      "Turn on all bathroom lights.",
      "Landscape orientation preferred.",
      "Open shower curtains to show the tub or shower interior.",
      "Clean mirrors to reduce glare and reflections.",
    ],
    commonMistakes: [
      "Standing too close — the full bathroom must be visible.",
      "Glare from mirrors or reflective surfaces.",
      "Dark or shadowed areas from poor lighting.",
      "Closed shower curtains hiding the tub area.",
    ],
  },
  "swimming-pool": {
    title: "Swimming Pool Photo",
    purpose:
      "We use this photo to verify the type, condition, and safety features of your swimming pool.",
    steps: [
      "Stand far enough back to capture the entire pool.",
      "Show the pool shape, size, and surrounding area.",
      "Capture any diving boards, slides, or pool equipment.",
      "Take the photo during daylight hours.",
      "Include the pool cover if applicable.",
    ],
    goodExample: {
      src: "/images/photo-guide/swimming-pool-good.webp",
      alt: "Swimming pool showing the full pool area with clear water and surroundings",
      caption: "Full pool visible, clear water, good lighting, surroundings shown.",
      fallbackSrc: ["/images/photo-guide/swimming-pool-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/swimming-pool-bad.webp",
      alt: "Swimming pool photo that is too close and shows only part of the pool",
      caption: "Too close — only partial pool visible, heavy shadows, poor angle.",
      fallbackSrc: ["/images/photo-guide/swimming-pool-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred for pools.",
      "Stand at the deep end for a full-length view.",
      "Remove pool covers for a clear water view.",
      "Avoid taking photos when the sun is reflecting off the water.",
    ],
    commonMistakes: [
      "Standing too close — the full pool must be visible.",
      "Sun glare on the water surface.",
      "Pool cover obscuring the water condition.",
      "Not showing the surrounding deck or safety equipment.",
    ],
  },
  "pool-fence": {
    title: "Pool Fence Photo",
    purpose: "We use this photo to verify that your pool has a compliant safety fence installed.",
    steps: [
      "Stand far enough to capture the full fence line.",
      "Show the gate, latch, and locking mechanism.",
      "Capture the fence height relative to the pool.",
      "Take additional close-ups of the gate latch.",
      "Show any gaps or openings in the fence.",
    ],
    goodExample: {
      src: "/images/photo-guide/pool-fence-good.webp",
      alt: "Pool fence showing the full fence line with visible gate and latch",
      caption: "Full fence line visible, gate and latch clear, no gaps visible.",
      fallbackSrc: ["/images/photo-guide/pool-fence-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/pool-fence-bad.webp",
      alt: "Pool fence photo that is too close and shows only a section of the fence",
      caption: "Too close — only partial fence visible, gate not shown.",
      fallbackSrc: ["/images/photo-guide/pool-fence-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Take photos from multiple angles to show the full perimeter.",
      "Close-up of the latch must show it works properly.",
      "Ensure the fence base and any gaps are visible.",
    ],
    commonMistakes: [
      "Only showing a small section of the fence.",
      "Not capturing the gate and latch mechanism.",
      "Overgrown vegetation hiding the fence line.",
      "Taking photos too far away to see the latch detail.",
    ],
  },
  fireplace: {
    title: "Fireplace / Hearth Photo",
    purpose:
      "We use this photo to verify the type, condition, and venting system of your fireplace or hearth.",
    steps: [
      "Stand far enough back to capture the entire fireplace.",
      "Show the hearth, firebox, and surround.",
      "Capture the flue or venting system if visible.",
      "Take a close-up of the manufacturer nameplate.",
      "Include the mantel and surrounding wall area.",
    ],
    goodExample: {
      src: "/images/photo-guide/fireplace-good.webp",
      alt: "Fireplace showing the full hearth, firebox, and mantel clearly",
      caption: "Full fireplace visible, hearth clear, mantel and surround shown.",
      fallbackSrc: ["/images/photo-guide/fireplace-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/fireplace-bad.webp",
      alt: "Fireplace photo that is too close and shows only the firebox",
      caption: "Too close — only firebox visible, hearth and surround cropped.",
      fallbackSrc: ["/images/photo-guide/fireplace-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Clean out ashes for a clear view of the firebox.",
      "Open the damper if possible to show the flue.",
      "Include any gas logs or inserts in the photo.",
    ],
    commonMistakes: [
      "Standing too close — the full fireplace must be visible.",
      "Dark firebox from not using flash.",
      "Furniture or decor blocking the view.",
      "Not showing the hearth extension.",
    ],
  },
  "solar-panels": {
    title: "Solar Panels Photo",
    purpose:
      "We use this photo to verify the installation, condition, and quantity of your solar panels.",
    steps: [
      "Stand far enough to capture all panels on the roof.",
      "Show the panels in relation to the roof structure.",
      "Capture the inverter and metering equipment if visible.",
      "Take a close-up of the panel manufacturer label.",
      "Take the photo during daylight hours.",
    ],
    goodExample: {
      src: "/images/photo-guide/solar-panels-good.webp",
      alt: "Solar panels on roof showing all panels clearly with good lighting",
      caption: "All panels visible, good lighting, clear roof context.",
      fallbackSrc: ["/images/photo-guide/solar-panels-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/solar-panels-bad.webp",
      alt: "Solar panel photo that is too close and shows only a few panels",
      caption: "Too close — only partial array visible, heavy shadows.",
      fallbackSrc: ["/images/photo-guide/solar-panels-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Stand as far back as needed to capture all panels.",
      "Avoid taking photos when the sun is reflecting off the glass.",
      "Include ground-level inverter and wiring when possible.",
    ],
    commonMistakes: [
      "Standing too close — the full array must be visible.",
      "Sun glare obscuring panel surfaces.",
      "Not showing the inverter or metering equipment.",
      "Taking photos at an angle that distorts panel count.",
    ],
  },
  "detached-garage": {
    title: "Detached Garage Photo",
    purpose:
      "We use this photo to verify the condition and construction of your detached garage or carport.",
    steps: [
      "Stand approximately 20–30 feet from the structure.",
      "Capture the entire building from ground to roofline.",
      "Show the garage doors, windows, and siding.",
      "Take additional photos of any structural issues.",
      "Include the surrounding area for context.",
    ],
    goodExample: {
      src: "/images/photo-guide/detached-garage-good.webp",
      alt: "Detached garage showing the full structure with clear details",
      caption: "Full structure visible, good lighting, all sides shown.",
      fallbackSrc: ["/images/photo-guide/detached-garage-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/detached-garage-bad.webp",
      alt: "Detached garage photo that is too close and partially hidden",
      caption: "Too close — roofline cropped, vegetation blocking the view.",
      fallbackSrc: ["/images/photo-guide/detached-garage-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Take photos from multiple angles.",
      "Open garage doors to show the interior if accessible.",
      "Remove vehicles from in front of the garage.",
    ],
    commonMistakes: [
      "Standing too close — the full structure must be visible.",
      "Vehicles blocking the garage doors.",
      "Overgrown vegetation hiding the structure.",
      "Only taking one photo — multiple angles needed.",
    ],
  },
  "other-structures": {
    title: "Other Structures Photo",
    purpose:
      "We use this photo to verify any additional structures on your property, such as sheds, barns, or guest houses.",
    steps: [
      "Stand approximately 20–30 feet from the structure.",
      "Capture the entire structure from ground to roofline.",
      "Show all sides if possible.",
      "Take additional photos of any damage or issues.",
      "Include the structure in relation to the main home.",
    ],
    goodExample: {
      src: "/images/photo-guide/other-structures-good.webp",
      alt: "Shed or outbuilding showing the full structure with clear details",
      caption: "Full structure visible, good lighting, surroundings shown.",
      fallbackSrc: ["/images/photo-guide/other-structures-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/other-structures-bad.webp",
      alt: "Outbuilding photo that is too close and partially blocked",
      caption: "Too close — structure cropped, vegetation blocking, dark.",
      fallbackSrc: ["/images/photo-guide/other-structures-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Clear vegetation or debris from around the structure.",
      "Take photos during daylight hours.",
      "Include any obvious damage or deterioration.",
    ],
    commonMistakes: [
      "Standing too close — the full structure must be visible.",
      "Overgrown vegetation hiding the structure.",
      "Dark or shadowed images.",
      "Only taking one photo from one angle.",
    ],
  },
};
