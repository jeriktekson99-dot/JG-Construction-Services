import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Building, Layers, Milestone, Info, X } from 'lucide-react';
import { ShowcaseProject } from '../types';

interface ShowcaseProps {
  onProjectClick: (projectId: string) => void;
}

export default function Showcase({ onProjectClick }: ShowcaseProps) {
  const projects: ShowcaseProject[] = [
    {
      id: "proj-1",
      title: "Steel Truss Logistics Warehouse",
      location: "Cavite",
      category: "Industrial Frameworks",
      year: "2025",
      image: "/src/assets/images/industrial_retrofit_1780500246965.png",
      scope: "Direct structural framework engineering, clear-span steel positioning, welding inspections, and gantry rail alignment.",
      details: [
        "Designed to bear severe typhonic wind loads up to 280 KPH",
        "Utilizes highly-optimized rigid gusset plate connections to distribute sheer forces evenly across structural frames",
        "Completed under Universal Logistics Inc. with 100% Structural Safety Audit Passed",
        "Unified wind pressure calculation: F_wind = C_q × q_s × I_w"
      ]
    },
    {
      id: "proj-3",
      title: "Seismic Retrofitting Project Alpha",
      location: "Tayabas",
      category: "Structural Design",
      year: "2024",
      image: "/src/assets/images/field_excellence_operations_1780503096054.png",
      scope: "Carbon-fiber column wrapping (CFRP), post-tension anchor placements, load recalculation distributions, and active in-process welding.",
      details: [
        "Implemented structural carbon-fiber jacket laminates (CFRP) to raise shear tolerances by 140%",
        "National Building Safety Standard Approved with direct certification alignment",
        "Eliminated dead-loads without reducing the physical building footprint",
        "Structural formula verified: V_b = C_v × I × W / (R_w × T)"
      ]
    },
    {
      id: "proj-8",
      title: "High-Load Structural Slab Engineering",
      location: "Manila",
      category: "Structural Design",
      year: "2023",
      image: "/src/assets/images/blueprint_cad_1780503663960.png",
      scope: "Finite element shear evaluation drawings, rebar grid designs, heavy slab structural modeling, and strict compliance certification.",
      details: [
        "Calculated structural distribution model enabling heavy vehicle loading parking decks",
        "Direct Structural Engineering Stamp successfully executed by licensed professional engineers",
        "Enabled heavy vehicle parking decks to sit safely above high-span retail units",
        "Ultimate design stress bending moments calibrated perfectly: M_ultimate = w_load × l^2 / 8"
      ]
    }
  ];

  return (
    <section 
      id="showcase" 
      className="py-16 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-black pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-black text-industrial-red uppercase tracking-widest">
                Our Showcase
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-black tracking-tight">
              Standard-Setting Executions
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-xs max-w-sm text-left md:text-right">
            [EXCELLENCE YOU CAN TRUST / MULTI-PIECE PORTFOLIO MATRIX]
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const isBlueBorder = idx % 2 === 1;
            return (
              <div
                key={proj.id}
                className="group cursor-pointer"
                onClick={() => onProjectClick(proj.id)}
              >
                {/* Image Container with Thin Black Border */}
                <div className={`relative aspect-4/3 overflow-hidden border border-black bg-gray-50 transition-all duration-300 ${
                  isBlueBorder 
                    ? 'group-hover:border-engineering-blue group-hover:shadow-[8px_8px_0px_#1B49B8]' 
                    : 'group-hover:border-industrial-red group-hover:shadow-[8px_8px_0px_#D41D1D]'
                }`}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Scope Overlay tag */}
                  <div className="absolute top-3 left-3 bg-white border border-black px-3 py-1 font-mono text-[10px] font-bold text-black uppercase tracking-wider">
                    {proj.year}
                  </div>

                  {/* Quick-action indicator */}
                  <div className="absolute bottom-3 right-3 bg-white border border-black p-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Info Text block below the image */}
                <div className="mt-4 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                      {proj.location}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="font-mono text-[10px] text-industrial-red font-bold tracking-widest uppercase">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-black text-xl group-hover:text-engineering-blue transition-colors leading-tight mb-2">
                    {proj.title}
                  </h3>

                  <span className="font-mono text-[10px] text-gray-700 font-bold uppercase tracking-wider group-hover:text-industrial-red transition-colors flex items-center gap-1">
                    View Project Blueprint & Specs →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
