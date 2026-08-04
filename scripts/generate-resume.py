#!/usr/bin/env python3
"""Generate the portfolio resume PDF from the verified 2026 career inventory."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume.pdf"

INK = colors.HexColor("#101828")
BLUE = colors.HexColor("#3156D9")
MUTED = colors.HexColor("#667085")
LINE = colors.HexColor("#D0D5DD")
LIME = colors.HexColor("#C9FF3D")


def register_fonts() -> None:
    base = Path("/System/Library/Fonts/Supplemental")
    pdfmetrics.registerFont(TTFont("Arial", str(base / "Arial.ttf")))
    pdfmetrics.registerFont(TTFont("Arial-Bold", str(base / "Arial Bold.ttf")))
    pdfmetrics.registerFont(TTFont("Georgia", str(base / "Georgia.ttf")))
    pdfmetrics.registerFont(TTFont("Georgia-Italic", str(base / "Georgia Italic.ttf")))


def draw_page(canvas, doc) -> None:
    width, height = LETTER
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, height - 0.19 * inch, width, 0.19 * inch, fill=1, stroke=0)
    canvas.setFillColor(LIME)
    canvas.rect(0, height - 0.19 * inch, 1.22 * inch, 0.19 * inch, fill=1, stroke=0)
    canvas.setFont("Arial", 7.3)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.62 * inch, 0.42 * inch, "ANDI RUDA  /  ENGINEERING LEADER")
    canvas.drawRightString(width - 0.62 * inch, 0.42 * inch, f"{doc.page}")
    canvas.restoreState()


def role(story, styles, company, title, dates, bullets) -> None:
    header = (
        f'<font name="Arial-Bold" color="#101828">{title}</font>'
        f'<font color="#667085">  |  {company}</font>'
        f'<font color="#3156D9">  |  {dates}</font>'
    )
    block = [Paragraph(header, styles["Role"])]
    for bullet in bullets:
        block.append(Paragraph(f"<bullet>&bull;</bullet>{bullet}", styles["ResumeBullet"]))
    block.append(Spacer(1, 8))
    story.append(KeepTogether(block))


def build_resume() -> None:
    register_fonts()

    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=LETTER,
        leftMargin=0.62 * inch,
        rightMargin=0.62 * inch,
        topMargin=0.52 * inch,
        bottomMargin=0.64 * inch,
        title="Andi Ruda - Engineering Leader Resume",
        author="Andi Ruda",
        subject="Engineering leadership, platform engineering, SaaS, fintech, and distributed systems",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=draw_page)])

    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name="Name",
        fontName="Georgia",
        fontSize=28,
        leading=31,
        textColor=INK,
        spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="Headline",
        fontName="Arial-Bold",
        fontSize=9.2,
        leading=12,
        textColor=BLUE,
        tracking=0.9,
        spaceAfter=7,
    ))
    styles.add(ParagraphStyle(
        name="Contact",
        fontName="Arial",
        fontSize=8.3,
        leading=11,
        textColor=MUTED,
        spaceAfter=12,
    ))
    styles.add(ParagraphStyle(
        name="Section",
        fontName="Arial-Bold",
        fontSize=8.4,
        leading=11,
        textColor=BLUE,
        tracking=1.2,
        spaceBefore=9,
        spaceAfter=6,
    ))
    styles.add(ParagraphStyle(
        name="Body",
        fontName="Arial",
        fontSize=8.7,
        leading=12.2,
        textColor=INK,
        spaceAfter=5,
    ))
    styles.add(ParagraphStyle(
        name="Role",
        fontName="Arial",
        fontSize=9.2,
        leading=12,
        textColor=INK,
        spaceBefore=3,
        spaceAfter=3,
    ))
    styles.add(ParagraphStyle(
        name="ResumeBullet",
        fontName="Arial",
        fontSize=8.25,
        leading=11.3,
        leftIndent=12,
        firstLineIndent=-8,
        bulletIndent=0,
        textColor=INK,
        spaceAfter=2.2,
    ))
    styles.add(ParagraphStyle(
        name="Skills",
        fontName="Arial",
        fontSize=8.2,
        leading=12,
        textColor=INK,
        spaceAfter=3,
    ))
    styles.add(ParagraphStyle(
        name="PageLabel",
        fontName="Arial-Bold",
        fontSize=7,
        leading=9,
        textColor=MUTED,
        alignment=TA_RIGHT,
    ))

    story = [
        Spacer(1, 7),
        Paragraph("Andi Ruda", styles["Name"]),
        Paragraph("ENGINEERING LEADER  /  PLATFORM, INTEGRATIONS & DISTRIBUTED SYSTEMS", styles["Headline"]),
        Paragraph(
            'Detroit Metropolitan Area  &nbsp;|&nbsp;  '
            '<link href="mailto:andiruda@gmail.com" color="#3156D9">andiruda@gmail.com</link>  &nbsp;|&nbsp;  '
            '<link href="https://andiruda.com" color="#3156D9">andiruda.com</link>  &nbsp;|&nbsp;  '
            '<link href="https://www.linkedin.com/in/andiruda/" color="#3156D9">linkedin.com/in/andiruda</link>',
            styles["Contact"],
        ),
        HRFlowable(width="100%", thickness=0.7, color=LINE, spaceAfter=8),
        Paragraph("EXECUTIVE PROFILE", styles["Section"]),
        Paragraph(
            "Hands-on engineering leader with 15+ years building SaaS products, leading technical teams, and modernizing cloud platforms. "
            "Currently leads a four-engineer team for a 3.3M-user platform spanning 7.3K Lambda functions, 620 REST APIs, 29 Angular applications, and 500+ microservices. Brings people leadership and technical "
            "depth to embedded analytics, fintech migrations, serverless architecture, reliability, and automation. Former Director of Development "
            "and founder/product builder who turns ambiguous business needs into durable systems and shipped products.",
            styles["Body"],
        ),
        Paragraph("PROFESSIONAL EXPERIENCE", styles["Section"]),
    ]

    role(story, styles, "Rhythm Software", "Engineering Manager", "Aug 2025 - Present", [
        "Lead a team of four engineers with responsibility for delivery, coaching, performance, technical direction, and cross-functional planning.",
        "Architected and hands-on delivered a secure, multi-tenant Omni BI platform, streaming data from hundreds of DynamoDB tables into a relational analytics layer and adding server-side tenant, user, and application scoping for a planned platform-wide paid add-on.",
        "Designed and automated a preview-first Stripe and Payrix token migration platform; moved thousands of tokens across 10 tenants using reconciliation, immutable review plans, backups, stale-write protection, monitoring, and human review, with effectively zero customer-visible downtime.",
        "Guide architecture and operations for a 3.3M-user AWS platform spanning 7.3K Lambda functions, 620 REST APIs, 29 Angular applications, and 500+ microservices.",
        "Modernized a shared AWS SDK layer from v2 to v3 without forcing consumer rewrites; standardized retries and error handling to improve resilience under throttling and transient failure.",
        "Partner with the CTO, product leaders, and engineering peers on roadmap sequencing, architecture, delivery risk, budget considerations, and operational reliability.",
    ])
    role(story, styles, "Rhythm Software", "Senior Software Engineer", "Jan 2021 - 2025", [
        "Designed and delivered scalable platform applications, APIs, and reusable JavaScript/TypeScript libraries across Angular, Node.js, and AWS.",
        "Led complex cross-service initiatives from requirements and architecture through rollout, production support, and iterative improvement.",
    ])
    role(story, styles, "BBVA", "Senior Software Engineer / Technical Lead", "Nov 2019 - Jan 2021", [
        "Led enterprise software initiatives from planning through delivery in a fast-paced Agile and CI/CD environment.",
        "Built infrastructure-provisioning automation, supported high-volume data pipelines, and resolved complex system and software failures.",
    ])

    story.append(PageBreak())
    story.extend([
        Spacer(1, 8),
        Paragraph("EXPERIENCE, CONTINUED", styles["Section"]),
    ])
    role(story, styles, "Dealership Performance CRM", "Director of Development", "Jul 2015 - Nov 2019", [
        "Led an organization of up to 10 people spanning engineering, QA, and product; supported hiring, training, delegation, and professional growth.",
        "Owned roadmap planning, architectural direction, engineering delivery, and budget decisions for SaaS platform initiatives.",
        "Improved delivery processes and cross-functional collaboration while evolving platform capabilities around customer and operational needs.",
    ])
    role(story, styles, "Dealer Spike", "Team Lead", "Dec 2011 - Aug 2015", [
        "Managed a four-person senior support team and helped oversee a 10-person support organization, including training new hires and developing team leads.",
        "Coordinated with engineering, SEO, client relations, launch, and front-end teams to resolve escalations, manage projects, and improve customer outcomes.",
    ])

    story.extend([
        Paragraph("FOUNDER & PRODUCT-BUILDER WORK", styles["Section"]),
        Paragraph(
            '<font name="Arial-Bold">Ruda Works LLC</font>  <font color="#667085">| Founder & Product Builder</font>',
            styles["Role"],
        ),
        Paragraph(
            "<bullet>&bull;</bullet>Building an independent venture studio spanning consumer AI, tabletop gaming, and civic technology through Alottle, Long Rest, CivicPort, and other initiatives.",
            styles["ResumeBullet"],
        ),
        Paragraph(
            "<bullet>&bull;</bullet>Solo-founded and built Time Tales, a full-stack AI educational storytelling SaaS spanning React/TypeScript, AWS Amplify serverless services, cited OpenAI story generation, branching narrative playback, image and audio generation, family workflows, Stripe billing, observability, automated testing, and release operations.",
            styles["ResumeBullet"],
        ),
        Spacer(1, 7),
        Paragraph("CORE EXPERTISE", styles["Section"]),
        Paragraph("<b>Leadership:</b> Team coaching, hiring, performance management, roadmap planning, stakeholder alignment, architecture review, delivery risk, budget awareness, and operational ownership.", styles["Skills"]),
        Paragraph("<b>Platforms:</b> AWS Lambda, DynamoDB, SNS/SQS, Step Functions, API Gateway, CloudFormation, CDK, Node.js, TypeScript, Angular, React, and CircleCI.", styles["Skills"]),
        Paragraph("<b>Domains:</b> Multi-tenant SaaS, embedded analytics and Omni BI, Stripe and Payrix integrations, payment migration and reconciliation, SOC 2 environments, reliability, and cloud cost optimization.", styles["Skills"]),
        Spacer(1, 7),
        HRFlowable(width="100%", thickness=0.7, color=LINE, spaceBefore=2, spaceAfter=8),
        Paragraph(
            '<font name="Georgia-Italic" size="10" color="#3156D9">Engineering leadership for consequential platforms.</font>',
            styles["Body"],
        ),
    ])

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_resume()
