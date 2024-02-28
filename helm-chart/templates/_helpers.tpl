{{/* templates/_helpers.tpl */}}

{{- define "molgenis.org.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a fullName template function that concatenates the release name and the chart name.
Usage in other templates: {{ template "fullname" . }}
*/}}
{{- define "molgenis.org.fullname" -}}
  {{- printf "%s-%s" .Release.Name .Chart.Name -}}
{{- end -}}