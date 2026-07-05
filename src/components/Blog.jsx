import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { copy, blogPosts, galleryPhotos } from '../data/content';
import BentoCard from './BentoCard';

const dateFmt = { id: { locale: 'id-ID' }, en: { locale: 'en-US' } };

function GalleryPhoto({ photo }) {
  const [failed, setFailed] = useState(false);

  return (
    <BentoCard className="p-0 aspect-[3/4] flex items-center justify-center">
      {failed ? (
        <div className="flex flex-col items-center gap-2 text-ink-muted dark:text-mist-muted">
          <ImageOff size={28} strokeWidth={1.5} />
          <span className="font-mono text-[11px] opacity-70">{photo.src.split('/').pop()}</span>
        </div>
      ) : (
        <img
          src={photo.src}
          alt=""
          className="w-full h-full object-cover rounded-md"
          onError={() => setFailed(true)}
        />
      )}
    </BentoCard>
  );
}

export default function Blog() {
  const { lang } = useLang();
  const t = copy[lang].blog;

  return (
    <section id="blog" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="label-tag mb-3">{t.eyebrow}</p>
        <h2 className="section-heading mb-3">{t.title}</h2>
        <p className="text-ink-muted dark:text-mist-muted mb-10 max-w-xl">{t.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {blogPosts.map((post) => {
            const item = t.items[post.id];
            const formatted = new Date(post.date).toLocaleDateString(dateFmt[lang].locale, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            });
            return (
              <BentoCard key={post.id}>
                <span className="label-tag mb-3">{formatted}</span>
                <h3 className="font-mono font-bold text-lg text-ink dark:text-mist mb-2">{item.title}</h3>
                <p className="text-sm text-ink-muted dark:text-mist-muted leading-relaxed">{item.excerpt}</p>
              </BentoCard>
            );
          })}
        </div>

        <h3 className="label-tag mb-2">{t.galleryTitle}</h3>
        <p className="text-ink-muted dark:text-mist-muted mb-6 max-w-xl text-sm">{t.gallerySubtitle}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-xl">
          {galleryPhotos.map((photo) => (
            <GalleryPhoto key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
