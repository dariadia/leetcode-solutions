import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'posts');

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map((slug) => getDocBySlug(slug));

  return posts;
}
