# Personal Portfolio Website

This is a modern personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern design
- 🌓 Dark / Light theme
- 📱 Fully responsive
- ⚡ Performance optimized
- 🎯 SEO friendly

## Getting Started

1. Clone the project and run:

```bash
npm install
npm run dev
```

2. Open your browser at `http://localhost:5173`

## Project Structure

```
src/
├── components/    # UI components
├── lib/           # Utility functions
├── hooks/         # React hooks
└── App.tsx        # Root application component
```

## Common Modification Guide

### 1. Update Personal Info

Open `src/App.tsx` and update the following parts:

```typescript
// Update name
<span className="text-xl font-bold">Mekin jemal</span>

// Update role / title
<p className="text-xl sm:text-2xl lg:text-3xl">
  Full-Stack Engineer & UI/UX Designer
</p>
```

### 2. Add a New Project

Add a new item to the `projects` array:

```typescript
{
  title: 'Project Name',
  description: 'Project description',
  tech: ['Tech 1', 'Tech 2'],
  image: 'Project image URL'
}
```

### 3. Update Skills

Modify the skills array:

```typescript
[
  { name: 'Skill name', level: 95 },
  // Add more skills
]
```

### 4. Add Work Experience

Add to the work experience array:

```typescript
{
  company: 'Company Name',
  position: 'Position',
  period: 'Time Range',
  description: 'Role description'
}
```

## Database Integration Plan

To add database support, you can use Supabase for the following features:

1. Project Showcase

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  technologies TEXT[],
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

2. Work Experience

```sql
CREATE TABLE experience (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  period TEXT,
  description TEXT,
  type TEXT CHECK (type IN ('work', 'education')),
  created_at TIMESTAMPTZ DEFAULT now()
);
```

3. Skill Evaluation

```sql
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  level INTEGER CHECK (level BETWEEN 0 AND 100),
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### Integration Steps

1. Click the "Connect to Supabase" button (or create a project in the Supabase dashboard)
2. Install dependency:

```json
{
  "dependencies": {
    "@supabase/supabase-js": "latest"
  }
}
```

3. Create the Supabase client:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
```

4. Create a data-fetching hook:

```typescript
function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return projects;
}
```

5. Use in a component:

```typescript
function ProjectsSection() {
  const projects = useProjects();
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
```

## Performance Optimization Tips

1. Image Optimization

- Use appropriate image sizes
- Add loading="lazy"
- Consider WebP format

2. Component Optimization

- Use React.memo() to reduce unnecessary re-renders
- Implement virtual scrolling for large lists

3. Build Optimization

- Enable code splitting
- Optimize dependency size
- Use Lighthouse to monitor performance

## Deployment

You can deploy the project to Netlify (or Vercel):

1. Commit your code
2. Connect the repository in the hosting platform
3. Configure environment variables if needed
4. Deploy

## Support

If you need help:

1. Review component documentation
2. Reference Tailwind CSS docs
3. Check the official React docs
# about
