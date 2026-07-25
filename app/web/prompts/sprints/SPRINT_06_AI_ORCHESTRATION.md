# SPRINT 06 · AI ORCHESTRATION

Versión: 1.0

---

# Objetivo

Integrar múltiples modelos de IA bajo una única interfaz.

El laboratorio decide qué modelo utilizar.

El usuario nunca trabaja directamente con un proveedor.

---

# Proveedores previstos

OpenAI

Anthropic

Gemini

Modelos locales

Proveedores futuros

---

# Arquitectura

User

↓

Director

↓

AI Router

↓

Provider

↓

Response Normalizer

↓

Knowledge

↓

Project

---

# Componentes

AIProvider

AIRouter

PromptBuilder

PromptTemplate

ResponseNormalizer

CostMonitor

FallbackManager

---

# Casos de uso

GenerateAnswer

GenerateIdeas

GeneratePrompt

SummarizeKnowledge

CompareResponses

---

# Reglas

Nunca acoplar el dominio a un proveedor.

Todas las respuestas pasan por un normalizador.

Registrar proveedor.

Modelo.

Tokens.

Tiempo.

Coste.

---

# Resultado esperado

El laboratorio puede cambiar de proveedor IA sin modificar el resto del sistema.