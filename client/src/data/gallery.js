// Gallery data - Replace with your actual images
export const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    alt: 'Golden Hour Portrait',
    category: 'portrait',
    title: 'Golden Hour Portrait',
    location: 'California Coast',
    date: '2024-08-15',
    tags: ['golden hour', 'outdoor', 'natural light'],
    camera: 'Canon EOS R5',
    lens: '85mm f/1.4',
    settings: 'ISO 400, f/2.8, 1/200s'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
    alt: 'Mountain Landscape',
    category: 'landscape',
    title: 'Mountain Majesty',
    location: 'Rocky Mountains',
    date: '2024-07-20',
    tags: ['landscape', 'mountains', 'nature'],
    camera: 'Nikon D850',
    lens: '24-70mm f/2.8',
    settings: 'ISO 100, f/11, 1/125s'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
    alt: 'Wedding Ceremony',
    category: 'wedding',
    title: 'Eternal Promise',
    location: 'Vineyard Estate',
    date: '2024-09-10',
    tags: ['wedding', 'ceremony', 'love'],
    camera: 'Sony A7IV',
    lens: '70-200mm f/2.8',
    settings: 'ISO 800, f/2.8, 1/250s'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1490650404312-a2175773bbf5?w=800',
    alt: 'Fashion Editorial',
    category: 'fashion',
    title: 'Urban Edge',
    location: 'New York City',
    date: '2024-06-05',
    tags: ['fashion', 'editorial', 'urban'],
    camera: 'Canon EOS R5',
    lens: '50mm f/1.2',
    settings: 'ISO 200, f/2.0, 1/320s'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1528385169395-b3d27da42b9f?w=800',
    alt: 'Family Portrait',
    category: 'portrait',
    title: 'Family Bonds',
    location: 'Home Studio',
    date: '2024-08-30',
    tags: ['family', 'indoor', 'portrait'],
    camera: 'Nikon Z9',
    lens: '85mm f/1.4',
    settings: 'ISO 640, f/2.0, 1/160s'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    alt: 'Misty Forest',
    category: 'landscape',
    title: 'Morning Mist',
    location: 'Pacific Northwest',
    date: '2024-05-15',
    tags: ['landscape', 'forest', 'mist'],
    camera: 'Sony A7RV',
    lens: '24-105mm f/4',
    settings: 'ISO 400, f/8, 1/60s'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    alt: 'Wedding Reception',
    category: 'wedding',
    title: 'Dancing Under Stars',
    location: 'Beach Resort',
    date: '2024-07-22',
    tags: ['wedding', 'reception', 'celebration'],
    camera: 'Canon EOS R6',
    lens: '35mm f/1.4',
    settings: 'ISO 1600, f/1.8, 1/125s'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    alt: 'Magazine Cover',
    category: 'fashion',
    title: 'Vogue Essence',
    location: 'Studio LA',
    date: '2024-04-18',
    tags: ['fashion', 'studio', 'editorial'],
    camera: 'Hasselblad H6D',
    lens: '80mm f/2.8',
    settings: 'ISO 100, f/5.6, 1/160s'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800',
    alt: 'Corporate Headshot',
    category: 'portrait',
    title: 'Professional Presence',
    location: 'Office Studio',
    date: '2024-09-01',
    tags: ['corporate', 'headshot', 'professional'],
    camera: 'Sony A7IV',
    lens: '85mm f/1.8',
    settings: 'ISO 320, f/4.0, 1/200s'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    alt: 'Sunset Ocean',
    category: 'landscape',
    title: 'Coastal Dreams',
    location: 'Big Sur',
    date: '2024-10-05',
    tags: ['landscape', 'ocean', 'sunset'],
    camera: 'Nikon D850',
    lens: '14-24mm f/2.8',
    settings: 'ISO 64, f/16, 1/30s'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    alt: 'Bride and Groom',
    category: 'wedding',
    title: 'Two Souls, One Heart',
    location: 'Garden Venue',
    date: '2024-08-25',
    tags: ['wedding', 'couple', 'romantic'],
    camera: 'Canon EOS R5',
    lens: '85mm f/1.4',
    settings: 'ISO 400, f/2.0, 1/250s'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    alt: 'Street Fashion',
    category: 'fashion',
    title: 'City Couture',
    location: 'Paris Streets',
    date: '2024-03-12',
    tags: ['fashion', 'street', 'urban'],
    camera: 'Leica M11',
    lens: '50mm f/1.4',
    settings: 'ISO 800, f/2.8, 1/500s'
  }
];

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Work', count: galleryImages.length },
  { id: 'wedding', name: 'Wedding', count: galleryImages.filter(img => img.category === 'wedding').length },
  { id: 'portrait', name: 'Portrait', count: galleryImages.filter(img => img.category === 'portrait').length },
  { id: 'fashion', name: 'Fashion', count: galleryImages.filter(img => img.category === 'fashion').length },
  { id: 'landscape', name: 'Landscape', count: galleryImages.filter(img => img.category === 'landscape').length }
];

// Featured projects for the showcase section
export const featuredProjects = [
  {
    id: 1,
    title: 'Sarah & Michael\'s Wedding',
    category: 'Wedding Photography',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200',
    description: 'A romantic vineyard wedding capturing timeless moments of love and celebration.',
    client: 'Private Client',
    location: 'Napa Valley, California'
  },
  {
    id: 2,
    title: 'Vogue Spring Collection',
    category: 'Fashion Editorial',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1490650404312-a2175773bbf5?w=1200',
    description: 'High-fashion editorial showcasing the latest spring trends in urban landscapes.',
    client: 'Vogue Magazine',
    location: 'New York City'
  },
  {
    id: 3,
    title: 'Pacific Northwest Journey',
    category: 'Landscape Series',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    description: 'An exploration of misty forests and rugged coastlines in the Pacific Northwest.',
    client: 'Personal Project',
    location: 'Oregon & Washington'
  }
];
