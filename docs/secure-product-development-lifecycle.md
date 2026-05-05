---
sidebar_position: 5
---
# 5. Secure Product Development Lifecycle (Secure SDLC)

## **5.1 Product Development Process** {#5.1-product-development-process}

Our Software Development Lifecycle (SDLC) primarily focuses on the development of our software product, hence the reason to call it Product Development Lifecycle. For product development projects the Product owner is managing a roadmap, while function managers are responsible for feature realisation and testing & release.

During development developers work on a separate feature branch on new product features, including tests.
New code is released to the main branch after reviews, running and passing all automated tests. A CI/CD system manages the automated tests.

In testing and review, code is tested and reviewed on a staging test environment by a colleague developer.
Issues are tracked and solved, using the scrum framework.
Once everything is resolved, code is merged with the main branch.
For an official release, once Product owner and CTO agree, an update of all packages including documentation is created, managed by a team member.

The product feature realisation is managed the same as development for projects, described in [section 13.2](./core-operational-processes#13.2-project-realisation) as part of project realisation.

## **5.2 Secure-by-Design Principles** {#5.2-secure-by-design-principles}

OpenRemote integrates security considerations into the design of its software architecture and services. Security is addressed from the earliest stages of system design to reduce vulnerabilities and ensure resilient system behaviour.

Design principles include minimising attack surfaces, applying the principle of least privilege, ensuring secure configuration by default, and implementing robust authentication and authorisation mechanisms.

## **5.3 Secure Coding Standards** {#5.3-secure-coding-standards}

Developers follow secure coding practices to minimise vulnerabilities in the OpenRemote platform. Code contributions are reviewed by peers before integration into the main codebase, and automated tests ensure that new functionality does not compromise system stability or security.

Where possible, automated analysis tools are used to detect potential vulnerabilities in the code. Secure coding practices are communicated within the development team and incorporated into the development workflow.

## **5.4 CI/CD Security Controls and penetration tests** {#5.4-ci/cd-security-controls-and-penetration-tests}

Continuous integration and deployment pipelines include safeguards to protect the integrity of the software build and release process.

Automated testing and validation steps are included in the pipeline to verify the functionality and integrity of new releases before deployment. Penetration tests are performed yearly.

## **5.5 SBOM Management** {#5.5-sbom-management-–-placeholder}

:::note
This is work in progress and not fully implemented yet, as OpenRemote, we are working on this subject and will publish an update soon.
:::

To maintain transparency regarding software components, OpenRemote maintains a software bill of materials (SBOM) describing dependencies used in its software releases. The SBOM provides visibility into third-party libraries and components integrated into the platform.

This information supports vulnerability monitoring and enables rapid identification of affected components when security issues are reported in external dependencies.

## **5.6 End-of-Life and Support Policy** {#5.6-end-of-life-and-support-policy}

OpenRemote defines support periods for software releases and communicates these periods to users and customers. When a version reaches its end of support, users are informed and encouraged to migrate to supported versions.

Security updates and bug fixes are prioritised for supported releases to maintain system reliability and security.
