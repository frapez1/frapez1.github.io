export const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    "Computer Vision":        "bg-indigo-500/20 text-indigo-400",
    "Generative AI":          "bg-pink-500/20 text-pink-400",
    "Machine Learning":       "bg-cyan-500/20 text-cyan-400",
    "Communications":         "bg-green-500/20 text-green-400",
    "Semantic Communication": "bg-green-500/20 text-green-400",
    "Research":           "bg-purple-600/20 text-purple-500",
    "Research Project":   "bg-yellow-600/20 text-yellow-500",
    "AI Research":        "bg-pink-600/20 text-pink-500",
    "Career":             "bg-indigo-600/20 text-indigo-500",
    "Technology":         "bg-teal-600/20 text-teal-500",
    "Medical AI":         "bg-cyan-600/20 text-cyan-500",
    "Theory":             "bg-red-600/20 text-red-500",
    "Edge Computing":     "bg-orange-600/20 text-orange-500",
    "Applied ML":         "bg-purple-700/20 text-purple-600",
    "Healthcare":         "bg-red-700/20 text-red-600",
    "Network Analysis":   "bg-green-600/20 text-green-500",
    "Big Data":           "bg-yellow-700/20 text-yellow-600",
    "Optimization":       "bg-orange-700/20 text-orange-600",
    "Deep Learning":      "bg-indigo-700/20 text-indigo-600",
    "Image Classification":"bg-teal-700/20 text-teal-600",
    "Medical Imaging":    "bg-red-800/20 text-red-700",
    "Signal Processing":  "bg-blue-600/20 text-blue-500",
    "Data Science":       "bg-blue-700/20 text-blue-600",
  };

  return categoryColors[category] || "bg-slate-500/20 text-slate-400";
};
