
export const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    "Research": "bg-blue-500/20 text-blue-400",
    "Research Project": "bg-blue-500/20 text-blue-400",
    "AI Research": "bg-purple-500/20 text-purple-400",
    "Career": "bg-green-500/20 text-green-400",
    "Technology": "bg-orange-500/20 text-orange-400",
    "Medical AI": "bg-red-500/20 text-red-400",
    "Theory": "bg-yellow-500/20 text-yellow-400",
    "Computer Vision": "bg-indigo-500/20 text-indigo-400",
    "Generative AI": "bg-pink-500/20 text-pink-400",
    "Edge Computing": "bg-teal-500/20 text-teal-400",
    "Machine Learning": "bg-cyan-500/20 text-cyan-400",
    "Applied ML": "bg-purple-500/20 text-purple-400",
    "Healthcare": "bg-red-500/20 text-red-400",
    "Network Analysis": "bg-orange-500/20 text-orange-400",
    "Big Data": "bg-yellow-500/20 text-yellow-400",
    "Communications": "bg-green-500/20 text-green-400",
    "Optimization": "bg-cyan-500/20 text-cyan-400",
    "Semantic Communication": "bg-green-500/20 text-green-400",
    "Deep Learning": "bg-orange-500/20 text-orange-400",
    "Image Classification": "bg-yellow-500/20 text-yellow-400",
    "Medical Imaging": "bg-green-500/20 text-green-400",
  };

  return categoryColors[category] || "bg-slate-500/20 text-slate-400";
};
