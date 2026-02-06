'use client';

import { useState } from 'react';
import { generateModuleContent } from '@/ai/flows/generate-module-content';
import { suggestModuleImprovements } from '@/ai/flows/suggest-module-improvements';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Wand2, Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ModuleContent({ moduleName }: { moduleName: string }) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateContent = async () => {
    setIsLoading(true);
    try {
      const result = await generateModuleContent({
        moduleName,
        userSkills:
          'Senior Systems Engineer, 10+ years of experience in cloud infrastructure, distributed systems, and DevOps.',
        userExperience:
          'Building and maintaining high-availability services for large-scale applications.',
      });
      setContent(result.content);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error Generating Content',
        description: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestImprovements = async () => {
    if (!content) {
      toast({
        title: 'Content is empty',
        description:
          'Please generate or write some content before suggesting improvements.',
      });
      return;
    }
    setIsLoading(true);
    try {
      const result = await suggestModuleImprovements({
        moduleDocumentation: content,
      });
      setContent(result.improvedDocumentation);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error Suggesting Improvements',
        description: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <Textarea
            placeholder="Document your problem-solving approaches, architectural decisions, tradeoffs, and potential improvements for this module. Use the AI assistant below to get started."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[400px] w-full resize-y text-base"
            disabled={isLoading}
          />
        </CardContent>
      </Card>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={handleGenerateContent}
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          Generate Starter Content
        </Button>
        <Button
          onClick={handleSuggestImprovements}
          disabled={isLoading || !content}
          variant="outline"
          className="w-full sm:w-auto"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Suggest Improvements
        </Button>
      </div>
    </div>
  );
}
