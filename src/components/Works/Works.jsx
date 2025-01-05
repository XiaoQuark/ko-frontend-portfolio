import { useState, useEffect } from "react";
import { getImageUrl } from "../../utils.js";
import "./Works.css";
import projectsData from "../../data/projects.json";
import categories from "../../data/categories.json";
import { WorkFilters } from "./WorkFilters";
import { ReactSVG } from "react-svg";
import {
  Card,
  CardContent,
  CardCover,
  Modal,
  ModalDialog,
  ModalClose,
  Link,
  DialogTitle,
  Typography,
  Chip,
  IconButton,
} from "@mui/joy";

export function Works() {
  const [filter, setFilter] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [openProject, setOpenProject] = useState(undefined);

  useEffect(() => {
    let filteredProjects;
    if (filter.name === "all") {
      filteredProjects = [...projectsData];
    } else {
      filteredProjects = projectsData.filter((project) =>
        project.category.some(
          (item) => item.toLocaleLowerCase() === filter.name
        )
      );
    }
    filteredProjects.sort((a, b) => b.id - a.id);
    setProjects(filteredProjects);
  }, [filter]);

  return (
    <section className="works section" id="works">
      <h2 className="section-title">Works</h2>
      <span className="section-subtitle">My most recent projects</span>
      <div>
        <WorkFilters categories={categories} setFilter={setFilter} />
        <div className="works-container container grid">
          {projects.map((project) => {
            if (project.wip === false) {
              return (
                <Card
                  variant="outlined"
                  project={project}
                  key={project.id}
                  sx={{
                    minHeight: "300px",
                    "&:hover .project-content": {
                      opacity: 1,
                    },
                    "&:hover .card-overlay": {
                      opacity: 1,
                    },
                    position: "relative",
                  }}
                  sm={{ minHeight: "400px" }}
                  md={{ minHeight: "500px" }}
                >
                  <CardCover>
                    <img
                      src={getImageUrl(project.cover.path)}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CardCover>
                  <CardCover
                    className="card-overlay"
                    sx={{
                      background: "rgba(0, 0, 0, 0.8)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Link
                    overlay
                    underline="none"
                    component="button"
                    onClick={() => {
                      setOpenProject(project);
                      console.log(openProject);
                    }}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <CardContent
                      className="project-content"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "flex-end",
                        justifyItems: "start",
                        padding: "0 0.5rem",
                        color: "var(--container-colour)",
                        opacity: 0,
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.outline}</p>
                    </CardContent>
                  </Link>
                </Card>
              );
            }
          })}
        </div>
      </div>
      {openProject && (
        <Modal open={!!openProject} onClose={() => setOpenProject(undefined)}>
          <ModalDialog
            layout="fullscreen"
            size="lg"
            variant="solid"
            sx={[
              {
                paddingTop: "2rem",
                background: "var(--container-colour)",
                color: "var(--text-colour)",
              },
              scroll ? { overflowY: "scroll" } : { overflowY: "initial" },
            ]}
          >
            <ModalClose
              style={{ position: "fixed", top: "10px", right: "30px" }}
            />
            <div
              className="container modal-header"
              style={{
                padding: "4rem 4rem",
                width: "100vw",
              }}
            >
              <DialogTitle level="h1">{openProject.title}</DialogTitle>
              <Typography level="h2" className="project-modal-outline">
                {openProject.outline}
              </Typography>
            </div>
            {/* Description */}
            {openProject.description && (
              <div className="container modal-description">
                {openProject.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
            <div className="container grid modal-data">
              {/* Left Column */}
              <div className="modal-left-column">
                {/* Category */}
                <div className="project-category">
                  {openProject.category.map((cat, index) => (
                    <Chip
                      key={index}
                      variant="outlined"
                      color="neutral"
                      size="lg"
                      sx={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                    >
                      {cat}
                    </Chip>
                  ))}
                </div>

                <div>
                  {/* Year */}
                  <p>
                    <strong>Year:</strong> {openProject.year}
                  </p>
                </div>

                <div>
                  {/* Tech Stack */}
                  <p>
                    <strong>Tech Stack</strong>
                  </p>
                  {openProject.techStack && (
                    <ul className="tech-stack-container grid">
                      {openProject.techStack.map((tech, index) => (
                        <li key={index} className="tech-stack-item">
                          {tech.logo && (
                            <ReactSVG
                              src={getImageUrl(tech.logo)}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "style",
                                  "width: 20px; height: 20px; margin-right: 0.5rem"
                                );
                              }}
                            />
                          )}
                          {tech.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <p>
                    <strong>Links</strong>
                  </p>
                  {/* Links */}
                  {openProject.links && (
                    <div className="project-links grid">
                      {openProject.links.map((link, index) => (
                        <IconButton
                          color="var(--title-colour)"
                          key={index}
                          variant="solid"
                          component="a"
                          href={link.url}
                          sx={{
                            maxWidth: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ReactSVG
                            src={getImageUrl(link.logo)}
                            beforeInjection={(svg) => {
                              svg.setAttribute(
                                "style",
                                "width: 24px; height: 24px; display: block; color: #fff"
                              );
                            }}
                          />
                        </IconButton>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="modal-right-column">
                <img
                  className="modal-cover-img"
                  src={getImageUrl(openProject.cover.path)}
                  alt={openProject.title}
                />
              </div>
            </div>

            {/* Gallery */}
            {openProject.gallery && openProject.gallery.length > 0 && (
              <div
                className="project-gallery grid"
                style={{
                  gridTemplateColumns: "repeat(3, 1fr)",
                  marginTop: "1rem",
                }}
              >
                {openProject.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image.imgPath}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      gridColumn: index % 3 === 2 ? "span 2" : "auto",
                    }}
                    className="gallery-image"
                  />
                ))}
              </div>
            )}
          </ModalDialog>
        </Modal>
      )}
    </section>
  );
}

{
  /* Team */
}
{
  /* {openProject.team && (
	<div
	  className="project-team grid"
	  style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
	>
	  <p>Team</p>
	  {openProject.team.map((member, index) => (
		<p key={index} className="team-member">
		  {member.name}
		</p>
	  ))}
	</div>
  )} */
}
