
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { articlesData } from "@/data/articlesData";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const SafetyArticles = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  
  // Automatically open the dialog when the component mounts
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleAction = () => {
    setOpen(false);
    navigate('/');
  };

  return (
    <Layout>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Under Construction</AlertDialogTitle>
            <AlertDialogDescription>
              The Safety Articles section is currently under construction. We're working to bring you valuable safety content soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleAction}>
              Return to Home Page
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-ds-neutral-900">Safety Articles</h1>
          <p className="text-ds-neutral-600 mb-8 text-lg">
            Expert insights on fall protection, equipment inspections, and safety certifications.
          </p>

          <div className="space-y-6">
            {articlesData.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={article.badgeColor}>
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
                    <Link to={`/safety-articles/${article.id}`}>Read article</Link>
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
