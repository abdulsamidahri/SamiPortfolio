import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  BookOpen, 
  Users, 
  Briefcase, 
  GraduationCap,
  Microscope,
  FlaskConical,
  Dna,
  Worm,
  BarChart3,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Menu,
  X,
  Shield,
  Brain,
  Heart,
  Activity,
  FileText,
  ChevronLeft,
  ChevronRight,
  Github,
  Twitter
} from "lucide-react";
import professionalPhoto1 from "@assets/WhatsApp Image 2025-08-25 at 18.52.08_95804655_1756534713837.jpg";
import professionalPhoto2 from "@assets/WhatsApp Image 2025-08-25 at 21.52.10_8d0a8574_1756534713839.jpg";
import professionalPhoto3 from "@assets/WhatsApp Image 2025-08-25 at 21.54.13_cd79e550_1756534713838.jpg";
import professionalPhoto4 from "@assets/WhatsApp Image 2025-08-25 at 22.05.36_4fdb53fa_1756534713837.jpg";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllPublications, setShowAllPublications] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    // Smooth scrolling behavior
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#publications", label: "Publications" },
    { href: "#teaching", label: "Teaching" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" }
  ];

  const currentPublications = [
    {
      title: "Prevalence of Malaria in Human Population of District Hyderabad Sindh, Pakistan",
      authors: "Dr Shakeel Ahmed Memon, Dr. Bakhtawar Soomro, Mr. Asim Patrick, & Abdul Sami",
      journal: "Physical Education, Health and Social Sciences 3(2):59–62 (2025)",
      doi: "https://doi.org/10.63163/jpehss.v3i2.410"
    },
    {
      title: "Artificial Intelligence and Its Transformative Role in Microbiology",
      authors: "Dahri, A. S., Ahmed, S., Patrick, A., Shaikh, A. A., & Qureshi, M. A.",
      journal: "Review Journal of Neurological & Medical Sciences Review 3(1):1–7 (2025)",
      doi: "https://doi.org/10.62019/nk9mpt79"
    },
    {
      title: "Quorum Sensing Signaling Molecules and Antibiotic Resistance Profiles of Pseudomonas aeruginosa AS006 and AS008",
      authors: "Patrick, A., MirJatt, A. N., Memon, S. B., Qureshi, A. S., Khushik, F. A., Khand, A. A., & Dahri, A. S.",
      journal: "Journal of Microbiological Sciences 4(1):70–75 (2025)",
      doi: ""
    }
  ];

  const previousPublications = [
    {
      title: "The Chemical Composition and Quality Analysis of Commercially Sold Milk in Hyderabad, Pakistan",
      journal: "Review Journal of Neurological & Medical Sciences Review 2(4):21–25 (2024)",
      doi: "https://doi.org/10.62019/13v32x64"
    },
    {
      title: "Antimicrobial Activity of Polyvinyl Alcohol Incorporating Bismuth‑Zinc Oxide Nanocomposite",
      journal: "Rev. J. Neurol. & Med. Sci. Rev. 2(4):26–38 (2024)",
      doi: ""
    },
    {
      title: "Bioactive compounds, antioxidant and antimicrobial attributes of Cordia sinensis Lam.",
      journal: "Journal of Applied Research in Plant Sciences 5(2):170–182 (2024)",
      doi: ""
    }
  ];

  const researchAreas = [
    {
      icon: <Dna className="w-6 h-6" />,
      title: "Molecular Biology",
      description: "Advanced research in molecular mechanisms and genetic engineering applications in microbiology."
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Fermentation Technology",
      description: "Expertise in aerobic/anaerobic fermentation processes, batch and fed-batch systems."
    },
    {
      icon: <Worm className="w-6 h-6" />,
      title: "Virology",
      description: "Comprehensive study of viral mechanisms and their applications in biotechnology."
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Microbial Physiology",
      description: "Deep understanding of bacterial and fungal physiology and metabolic processes."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Statistical Analysis",
      description: "Advanced statistical experimental design and data analysis methodologies."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Leadership",
      description: "Graduate and postgraduate instruction with technical leadership expertise."
    }
  ];

  const certifications = [
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI (Coursera)",
      instructor: "Andrew Ng",
      date: "July 31, 2023",
      category: "Artificial Intelligence",
      verificationUrl: "https://coursera.org/verify/EMWKV4MDN5YD"
    },
    {
      title: "The Art of Academic Honesty: Plagiarism Unpacked",
      issuer: "Higher Education Commission",
      provider: "ProQuest",
      date: "January 25, 2022",
      category: "Academic Integrity",
      description: "Training session on academic honesty and plagiarism prevention"
    },
    {
      title: "COVID-19: Operational Planning Guidelines",
      issuer: "WHO/UNCT",
      date: "April 13, 2020",
      category: "Public Health",
      description: "Partners Platform to support country preparedness and response"
    },
    {
      title: "SARI Treatment Facility Design",
      issuer: "WHO",
      date: "April 13, 2020",
      category: "Healthcare Design",
      description: "Severe Acute Respiratory Infection treatment facility planning"
    },
    {
      title: "Biohacking Your Brain's Health",
      issuer: "Emory University (Coursera)",
      instructor: "Dr. Karima Benameur, MD",
      date: "December 13, 2018",
      category: "Neuroscience",
      verificationUrl: "https://coursera.org/verify/PAAMCH5ECGQZ"
    },
    {
      title: "International Conference Paper Presentation",
      issuer: "Conference Organization",
      date: "2022",
      category: "Research Presentation",
      description: "Certificate of presentation of research paper at international conference"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Solid Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 nav-solid-override" style={{ backgroundColor: '#ffffff !important', borderBottom: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', background: '#ffffff !important' }} key="nav-2025">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-foreground">Dr. Abdul Sami</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
      
      {/* Add top padding to account for fixed header */}
      <div className="pt-16"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/15">
        {/* Decorative wave */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="url(#heroGradient)" d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,202.7C672,181,768,107,864,85.3C960,64,1056,96,1152,128C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
            <defs>
              <linearGradient id="heroGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(210 100% 45%)" />
                <stop offset="50%" stopColor="hsl(190 85% 55%)" />
                <stop offset="100%" stopColor="hsl(210 100% 50%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
                Dr. <span className="gradient-text">Abdul Sami</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
                Assistant Professor, Department of Microbiology
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Government College University Hyderabad
              </p>
              
              {/* Quick Contact */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild className="shadow-md" data-testid="hero-email-button">
                  <a href="mailto:abdulsamidahri@gcuh.edu.pk" className="inline-flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </Button>
                <Button variant="outline" asChild className="shadow-md" data-testid="hero-phone-button">
                  <a href="tel:+923333979737" className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </a>
                </Button>
                <Button variant="outline" asChild className="shadow-md" data-testid="hero-github-button">
                  <a href="https://github.com/abdulsamidahri" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" asChild className="shadow-md" data-testid="hero-twitter-button">
                  <a href="https://x.com/sameedahri" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Twitter className="w-4 h-4" />
                    <span>X</span>
                  </a>
                </Button>
              </div>
              
              {/* Research Highlights */}
              <div className="grid grid-cols-2 gap-3">
                <Card className="p-4">
                  <div className="text-2xl font-bold text-primary">23</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </Card>
                <Card className="p-4">
                  <div className="text-2xl font-bold text-primary">11+</div>
                  <div className="text-sm text-muted-foreground">Years Teaching</div>
                </Card>
              </div>
            </div>
            
            {/* Professional Photo */}
            <div className="animate-fade-in">
              <div className="relative max-w-md mx-auto">
                <img 
                  src={professionalPhoto1}
                  alt="Dr. Abdul Sami professional headshot" 
                  className="w-full h-auto rounded-2xl border-4 border-white"
                  data-testid="hero-professional-photo"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">About Dr. Abdul Sami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bio Card */}
            <Card className="lg:col-span-2 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl transform -rotate-2"></div>
                      <img 
                        src={professionalPhoto2}
                        alt="Dr. Abdul Sami at university event" 
                        className="relative w-full h-full object-cover rounded-xl shadow-lg border-2 border-white"
                        data-testid="about-professional-photo"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Background</h3>
                  </div>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Abdul Sami is a distinguished Assistant Professor in the Department of Microbiology at Government College University Hyderabad. With extensive expertise in molecular biology, microbial fermentation, and biotechnology, he has established himself as a leading researcher and educator in the field.
                  </p>
                  <p>
                    His research focuses on cutting-edge areas including microbial physiology, fermentation technology, and virology. Dr. Sami has contributed significantly to the scientific community through his numerous publications and active participation in professional organizations.
                  </p>
                  <p>
                    As an educator with over 11 years of teaching experience, he brings both theoretical knowledge and practical expertise to his teaching, having instructed courses ranging from fundamental microbiology to advanced specialized topics across undergraduate and graduate programs.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Stats */}
            <div className="space-y-6">
              {/* Research Areas */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-primary" />
                    Research Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Molecular Biology", "Microbial Fermentation", "Fermentation Technology", "Virology", "Biotechnology"].map((interest) => (
                      <span 
                        key={interest}
                        className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Specialties */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Specialties
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    {[
                      "Statistical experimental design & analysis",
                      "Hands-on wet-lab & data workflows",
                      "Graduate and postgraduate instruction",
                      "Technical leadership & communication"
                    ].map((specialty, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Research & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advancing microbiology through innovative research in molecular biology, fermentation technology, and biotechnological applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 text-white">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Publications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Recent contributions to scientific literature and ongoing research
            </p>
          </div>
          
          {/* 2025 Publications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2025</span>
              Recent Publications
            </h3>
            <div className="space-y-6">
              {currentPublications.map((pub, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h4>
                    <p className="text-muted-foreground mb-2">{pub.authors}</p>
                    <p className="text-sm text-muted-foreground mb-3">{pub.journal}</p>
                    {pub.doi && (
                      <Button variant="link" asChild className="p-0 h-auto" data-testid={`publication-link-${index}`}>
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          <ExternalLink className="w-3 h-3" />
                          <span className="text-sm">View Publication</span>
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Earlier Publications */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">2024</span>
              Selected Earlier Publications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {previousPublications.slice(0, 2).map((pub, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{pub.journal}</p>
                    {pub.doi && (
                      <Button variant="link" asChild className="p-0 h-auto">
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          <ExternalLink className="w-3 h-3" />
                          <span className="text-sm">View Publication</span>
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                onClick={() => setShowAllPublications(!showAllPublications)}
                className="shadow-md"
                data-testid="toggle-publications-button"
              >
                <span>{showAllPublications ? "Show Less" : "View All Publications"}</span>
                {showAllPublications ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
              </Button>
            </div>
            
            {showAllPublications && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {previousPublications.slice(2).map((pub, index) => (
                  <Card key={index + 2} className="shadow-md">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground">{pub.journal}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full transform rotate-3 scale-110"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
                  <img 
                    src={professionalPhoto3}
                    alt="Dr. Abdul Sami formal portrait" 
                    className="w-full h-full object-cover object-top scale-110"
                    data-testid="teaching-professional-photo"
                  />
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">Teaching Experience</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                  Comprehensive curriculum delivery across undergraduate and graduate programs
                </p>
              </div>
            </div>
          </div>
          
          {/* Teaching Timeline */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2025</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Current Semester</h3>
                    <p className="text-muted-foreground">Active Teaching Load</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Soil Microbiology", "Immunology", "Fundamentals of Microbiology I"].map((course) => (
                    <div key={course} className="px-4 py-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="font-medium text-foreground">{course}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">2024</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Previous Year</h3>
                    <p className="text-muted-foreground">Courses Taught</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Fundamentals of Microbiology II", "EDU‑3631 General Science", "Dynamics of Natural Science"].map((course) => (
                    <div key={course} className="px-4 py-3 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="font-medium text-foreground">{course}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Certifications & Training</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Professional development through specialized training programs and certifications
            </p>
          </div>
          
          {/* Carousel Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollPrev}
                className="w-10 h-10 p-0"
                data-testid="carousel-prev-button"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollNext}
                className="w-10 h-10 p-0"
                data-testid="carousel-next-button"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Swipe or use arrows to navigate
            </div>
          </div>

          {/* Interactive Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {certifications.map((cert, index) => {
                const getCategoryIcon = (category: string) => {
                  switch (category) {
                    case "Artificial Intelligence":
                      return <Brain className="w-5 h-5" />;
                    case "Academic Integrity":
                      return <Shield className="w-5 h-5" />;
                    case "Public Health":
                      return <Heart className="w-5 h-5" />;
                    case "Healthcare Design":
                      return <Activity className="w-5 h-5" />;
                    case "Neuroscience":
                      return <Brain className="w-5 h-5" />;
                    case "Research Presentation":
                      return <Award className="w-5 h-5" />;
                    default:
                      return <FileText className="w-5 h-5" />;
                  }
                };

                const getCategoryColor = (category: string) => {
                  switch (category) {
                    case "Artificial Intelligence":
                      return "from-blue-500 to-purple-500";
                    case "Academic Integrity":
                      return "from-green-500 to-emerald-500";
                    case "Public Health":
                      return "from-red-500 to-pink-500";
                    case "Healthcare Design":
                      return "from-orange-500 to-amber-500";
                    case "Neuroscience":
                      return "from-indigo-500 to-purple-500";
                    case "Research Presentation":
                      return "from-teal-500 to-cyan-500";
                    default:
                      return "from-primary to-accent";
                  }
                };

                return (
                  <div key={index} className="flex-none w-80 md:w-96">
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                            {getCategoryIcon(cert.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`inline-block px-2 py-1 text-xs rounded-full bg-gradient-to-r ${getCategoryColor(cert.category)} text-white`}>
                                {cert.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                              {cert.title}
                            </h3>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 flex-shrink-0" />
                            <span className="font-medium">{cert.issuer}</span>
                          </div>
                          
                          {cert.instructor && (
                            <div className="flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 flex-shrink-0" />
                              <span>Instructor: {cert.instructor}</span>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 flex-shrink-0" />
                            <span>{cert.date}</span>
                          </div>
                          
                          {cert.description && (
                            <p className="text-xs mt-3 text-muted-foreground/80">
                              {cert.description}
                            </p>
                          )}
                        </div>
                        
                        {cert.verificationUrl && (
                          <div className="mt-4 pt-4 border-t">
                            <Button variant="outline" size="sm" asChild data-testid={`cert-verify-${index}`}>
                              <a 
                                href={cert.verificationUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Verify Certificate
                              </a>
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Roles Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Assistant Professor",
                    institution: "Government College University Hyderabad",
                    period: "24‑02‑2025 - Present",
                    color: "primary"
                  },
                  {
                    title: "Lecturer",
                    institution: "Government College University Hyderabad",
                    period: "30‑09‑2020 - 24‑02‑2025",
                    color: "accent"
                  },
                  {
                    title: "Lecturer",
                    institution: "College Education Department, Govt. of Sindh",
                    period: "03‑02‑2014 - 30‑09‑2020",
                    color: "muted"
                  }
                ].map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`flex-none w-4 h-4 rounded-full mt-2 ${
                      exp.color === 'primary' ? 'bg-primary' : 
                      exp.color === 'accent' ? 'bg-accent' : 'bg-muted-foreground'
                    }`}></div>
                    <Card className="flex-1 shadow-md">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.institution}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Administrative Duties */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Administrative Duties
              </h3>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {[
                      "Focal Person BS Microbiology Program",
                      "Convener, Board of Studies (BS Microbiology)",
                      "Focal Person, Department of Botany",
                      "Member, Library Committee (GCUH)",
                      "Member, QEC Committee (GCUH)",
                      "Tabulator Examination, Office of Controller Examinations (GCUH)"
                    ].map((duty, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{duty}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & References Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Contact & References</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg transform rotate-2"></div>
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md border-2 border-white bg-white">
                      <img 
                        src={professionalPhoto4}
                        alt="Dr. Abdul Sami at convocation ceremony" 
                        className="w-full h-full object-cover object-top scale-110"
                        data-testid="contact-professional-photo"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Contact Information
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <Button variant="link" asChild className="p-0 h-auto" data-testid="contact-email-link">
                        <a href="mailto:abdulsamidahri@gcuh.edu.pk">
                          abdulsamidahri@gcuh.edu.pk
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <Button variant="link" asChild className="p-0 h-auto" data-testid="contact-phone-link">
                        <a href="tel:+923333979737">
                          +92 333 3979737
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Institution</p>
                      <p className="text-muted-foreground">Government College University Hyderabad</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <Button variant="link" asChild className="p-0 h-auto" data-testid="contact-github-link">
                        <a href="https://github.com/abdulsamidahri" target="_blank" rel="noopener noreferrer">
                          github.com/abdulsamidahri
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Twitter className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">X (Twitter)</p>
                      <Button variant="link" asChild className="p-0 h-auto" data-testid="contact-twitter-link">
                        <a href="https://x.com/sameedahri" target="_blank" rel="noopener noreferrer">
                          x.com/sameedahri
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* References */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Professional References
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      name: "Prof. Dr. Sarfaraz Ali",
                      title: "Institute of Microbiology, Univ. of Sindh",
                      phone: "+92 332 2604610",
                      email: "sarfraz.tunio@usindh.edu.pk",
                      borderColor: "border-primary"
                    },
                    {
                      name: "Dr. Abdul Nabi Mirjut",
                      title: "Assistant Professor, Institute of Microbiology, Univ. of Sindh",
                      phone: "+92 333 1237814",
                      email: "abdul.nabi@usindh.edu.pk",
                      borderColor: "border-accent"
                    },
                    {
                      name: "Prof. Dr. Shakeel Ahmed",
                      title: "Department of Zoology, GCU Hyderabad",
                      phone: "+92 300 3069383",
                      email: "shakeelahmed.memon@gcuh.edu.pk",
                      borderColor: "border-primary"
                    }
                  ].map((ref, index) => (
                    <div key={index} className={`border-l-4 ${ref.borderColor} pl-4`}>
                      <h4 className="font-semibold text-foreground">{ref.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{ref.title}</p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2">
                          <Phone className="w-3 h-3 text-primary" />
                          <Button variant="link" asChild className="p-0 h-auto text-sm" data-testid={`reference-phone-${index}`}>
                            <a href={`tel:${ref.phone}`}>{ref.phone}</a>
                          </Button>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-3 h-3 text-primary" />
                          <Button variant="link" asChild className="p-0 h-auto text-sm" data-testid={`reference-email-${index}`}>
                            <a href={`mailto:${ref.email}`}>{ref.email}</a>
                          </Button>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Dr. Abdul Sami</h3>
            <p className="text-white/80 mb-6">Assistant Professor, Department of Microbiology</p>
            <p className="text-white/80 mb-8">Government College University Hyderabad</p>
            
            <div className="flex justify-center gap-6 mb-8">
              <Button size="sm" asChild className="rounded-full w-12 h-12" data-testid="footer-email-button">
                <a href="mailto:abdulsamidahri@gcuh.edu.pk">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" asChild className="rounded-full w-12 h-12" data-testid="footer-phone-button">
                <a href="tel:+923333979737">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" asChild className="rounded-full w-12 h-12" data-testid="footer-github-button">
                <a href="https://github.com/abdulsamidahri" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button size="sm" asChild className="rounded-full w-12 h-12" data-testid="footer-twitter-button">
                <a href="https://x.com/sameedahri" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 text-sm">
                © 2025 Dr. Abdul Sami. Professional Academic Portfolio.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
