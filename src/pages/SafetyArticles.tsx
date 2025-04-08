
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, FileCheck, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SafetyArticles = () => {
  // Article data with categories and descriptions
  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Fall Protection Equipment Inspections",
      description: "Learn the essential steps for properly inspecting harnesses, lanyards, and other fall protection equipment to ensure worker safety.",
      category: "Inspections",
      icon: FileCheck,
      date: "March 15, 2025",
      readTime: "8 min read",
      url: "#article-1",
    },
    {
      id: 2,
      title: "Understanding OSHA Requirements for Fall Protection Certification",
      description: "A comprehensive breakdown of OSHA certification requirements for fall protection equipment and training.",
      category: "Certifications",
      icon: Award,
      date: "February 22, 2025",
      readTime: "10 min read",
      url: "#article-2",
    },
    {
      id: 3,
      title: "The Role of Technology in Modern Fall Protection Systems",
      description: "How digital tools are revolutionizing fall protection management, from equipment tracking to inspection documentation.",
      category: "Technology",
      icon: ShieldCheck,
      date: "January 30, 2025",
      readTime: "7 min read",
      url: "#article-3",
    },
    {
      id: 4,
      title: "Best Practices for Documenting Fall Protection Inspections",
      description: "Step-by-step guidelines for creating and maintaining thorough documentation of all fall protection equipment inspections.",
      category: "Inspections",
      icon: FileCheck,
      date: "January 12, 2025",
      readTime: "6 min read",
      url: "#article-4",
    },
    {
      id: 5,
      title: "Fall Protection Certification: Why It Matters and How to Get It",
      description: "The importance of proper certification for fall protection equipment and personnel, with guidance on certification processes.",
      category: "Certifications",
      icon: Award,
      date: "December 18, 2024",
      readTime: "9 min read",
      url: "#article-5",
    },
    {
      id: 6,
      title: "Common Pitfalls in Fall Protection Compliance",
      description: "Identify and avoid the most common mistakes organizations make when implementing fall protection programs.",
      category: "Compliance",
      icon: ShieldCheck,
      date: "November 29, 2024",
      readTime: "11 min read",
      url: "#article-6",
    },
  ];

  // Category badge color mapping
  const categoryColor = (category: string) => {
    switch (category) {
      case "Inspections":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Certifications":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Technology":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Compliance":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-ds-neutral-900">Safety Articles</h1>
          <p className="text-ds-neutral-600 mb-8 text-lg">
            Expert insights on fall protection, equipment inspections, and safety certifications.
          </p>

          <div className="space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${categoryColor(article.category)} font-medium`}>
                      {article.category}
                    </Badge>
                    <div className="text-ds-neutral-400 text-sm flex items-center space-x-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-1 flex items-center gap-2">
                    <article.icon className="h-5 w-5 text-ds-blue-600 flex-shrink-0" />
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-ds-neutral-600">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-2 text-ds-blue-600 border-ds-blue-200 hover:bg-ds-blue-50 hover:text-ds-blue-700"
                  >
                    <Link to={article.url}>Read article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SafetyArticles;
