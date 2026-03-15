import React from "react";
import { X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function ProjectDetails({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative project-modal-card w-full max-w-4xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 bg-white rounded-full p-2 shadow"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="modal-media bg-gradient-to-br from-blue-50 to-white">
          <img src={project.image} alt={project.title} className="modal-img" />
        </div>

        <div className="modal-body p-6 md:p-8 bg-white">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">Project overview</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="mb-5">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Highlights
            </h4>
            <ul className="feature-list text-gray-600">
              <li>Responsive UI with modern design</li>
              <li>Clean component structure and animations</li>
              <li>Accessible interactions and keyboard support</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:brightness-105"
            >
              Live preview
            </a>
            <a
              href="#"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 border border-slate-100 text-slate-800 rounded-lg"
            >
              View code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
