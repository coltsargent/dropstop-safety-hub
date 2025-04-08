
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { articlesData } from '@/data/articlesData';

const ArticleContent = () => {
  const { articleId } = useParams();
  const article = articlesData.find(a => a.id === Number(articleId));

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/safety-articles">Back to Articles</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="outline" 
            asChild
            className="mb-6"
          >
            <Link to="/safety-articles" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>
          </Button>

          <div className="mb-4">
            <Badge className={article.badgeColor}>
              {article.category}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-ds-neutral-900">{article.title}</h1>
          
          <div className="flex items-center gap-4 text-ds-neutral-500 mb-8">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{article.readTime}</span>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </CardContent>
          </Card>

          <div className="border-t border-ds-neutral-200 pt-8 mt-8">
            <h3 className="font-semibold text-xl mb-4">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articlesData
                .filter(a => a.id !== article.id)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Card key={relatedArticle.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <Badge className={relatedArticle.badgeColor} variant="secondary">
                        {relatedArticle.category}
                      </Badge>
                      <h4 className="font-medium mt-2 mb-1 line-clamp-2">{relatedArticle.title}</h4>
                      <Button 
                        asChild
                        variant="link"
                        className="p-0 h-auto text-ds-blue-600"
                      >
                        <Link to={`/safety-articles/${relatedArticle.id}`}>Read article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleContent;
