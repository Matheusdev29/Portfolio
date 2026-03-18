import { useEffect, useRef, useState } from "react"
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  styled,
  keyframes,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import TODOlist from "../../../../assets/images/TODO_list.png"
// --- Tipos ---
interface Project {
  title: string
  description: string
  image: string
  github: string
  tags: string[]
}

// --- Seus projetos ---
const projects: Project[] = [
  {
    title: "TO-DO list",
    description: "Em execução...",
    image: TODOlist,
    github: "https://github.com/seu-usuario/projeto1",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Previsão do Tempo com API",
    description: "Em execução...",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    github: "https://github.com/seu-usuario/projeto2",
    tags: ["Node.js", "Redis", "Docker"],
  },
  {
    title: "Dashboard Financeiro Interativo",
    description: "Em execução...",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80",
    github: "https://github.com/seu-usuario/projeto3",
    tags: ["Python", "AWS", "CLI"],
  },
]

// --- Keyframes ---
const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`

// --- Styled ---
const SectionWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.dark,
  padding: "80px 0",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent)",
  },
}))

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  overflow: "hidden",
  transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",

  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(100,160,255,0.3)",
    borderColor: "rgba(100,160,255,0.4)",

    "& .card-image": {
      transform: "scale(1.08)",
    },
    "& .card-overlay": {
      opacity: 1,
    },
  },
}))

const ImageWrapper = styled(Box)({
  position: "relative",
  overflow: "hidden",
  height: "200px",
})

const CardOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, rgba(100,160,255,0.15), rgba(80,220,180,0.1))",
  opacity: 0,
  transition: "opacity 0.35s ease",
})

// --- Hook de animação de entrada ---
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

// --- Card individual ---
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useInView()

  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        ...(visible && {
          animation: `${fadeSlideUp} 0.7s ease forwards`,
          animationDelay: `${index * 150}ms`,
        }),
        height: "100%",
      }}
    >
      <StyledCard elevation={0}>
        <ImageWrapper>
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            className="card-image"
            sx={{
              height: "200px",
              transition: "transform 0.5s ease",
            }}
          />
          <CardOverlay className="card-overlay" />
        </ImageWrapper>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h6"
            color="primary.contrastText"
            fontWeight={700}
            mb={1}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="rgba(255,255,255,0.6)"
            lineHeight={1.7}
            mb={2}
          >
            {project.description}
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={0.8}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: "rgba(100,160,255,0.12)",
                  color: "rgba(100,160,255,0.9)",
                  border: "1px solid rgba(100,160,255,0.2)",
                  fontSize: "0.7rem",
                }}
              />
            ))}
          </Box>
        </CardContent>

        <CardActions sx={{ p: 3, pt: 0 }}>
          <Button
            component="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<GitHubIcon />}
            endIcon={<OpenInNewIcon sx={{ fontSize: "0.75rem !important" }} />}
            fullWidth
            sx={{
              borderRadius: "8px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(100,160,255,0.1)",
                transform: "none",
              },
            }}
          >
            Ver no GitHub
          </Button>
        </CardActions>
      </StyledCard>
    </Box>
  )
}

// --- Section principal ---
export default function Projects() {
  const { ref: titleRef, visible: titleVisible } = useInView()

  return (
    <SectionWrapper id="projects">
      <Box maxWidth="1100px" mx="auto" px={4}>

        {/* Título */}
        <Box
          ref={titleRef}
          sx={{
            textAlign: "center",
            mb: 8,
            opacity: 0,
            ...(titleVisible && {
              animation: `${fadeSlideUp} 0.7s ease forwards`,
            }),
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "rgba(100,160,255,0.8)", letterSpacing: 4, fontSize: "0.75rem" }}
          >
            portfólio
          </Typography>
          <Typography variant="h3" color="primary.contrastText" fontWeight={700} mt={1}>
          <a id="project">Projetos</a>  
          </Typography>
          <Box
            sx={{
              width: 48,
              height: 3,
              background: "linear-gradient(90deg, #64a0ff, #50dcb4)",
              borderRadius: 2,
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
   
    </SectionWrapper>
  )
}