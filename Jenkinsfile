def siteDocker
pipeline {
    agent {
        kubernetes {
            label 'molgenis'
        }
    }
    environment {
        REPOSITORY = 'molgenis/site'
    }
    stages {
        stage('Retrieve build secrets') {
            steps {
                container('vault') {
                    script {
                        env.GITHUB_TOKEN = sh(script: 'vault read -field=value secret/ops/token/github', returnStdout: true)
                        env.GITHUB_USER = sh(script: 'vault read -field=username secret/ops/token/github', returnStdout: true)
                    }
                }
            }
        }
        stage('Steps [ PR ]') {
            when {
                changeRequest()
            }
            environment {
                TAG = "PR-$CHANGE_ID"
            }
            stages {
                stage('Build [ PR ]') {
                    steps {
                        script {
                            container('jekyll') {
                                sh('jekyll build')
                                docker.withRegistry("https://${LOCAL_REGISTRY}", "molgenis-jenkins-registry-secret") {
                                    def siteDockerDev = docker.build("${LOCAL_REPOSITORY}:${TAG}", "--pull --no-cache --force-rm .")
                                    siteDockerDev.push("${TAG}")
                                }
                            }
                        }
                    }
                }
                stage("Deploy to dev-site [ site.dev.molgenis.org ]") {
                    steps {
                        milestone(ordinal: 100, label: 'deploy to dev.molgenis.org')
                        container('helm') {
                            sh "helm init --client-only"
                            sh "helm repo add molgenis ${HELM_REPO}"
                            sh "helm repo update"
                            sh "helm upgrade site-dev molgenis/molgenis --reuse-values --set site.image.tag=${TAG} --set site.image.repository=${LOCAL_REGISTRY}"
                        }
                    }
                }
            }
        }
    } post {
        success {
            notifySuccess()
        }
        failure {
            notifyFailed()
        }
    }
}

def notifySuccess() {
    hubotSend(message: 'Build success', status: 'INFO', site: 'slack-pr-ops')
}

def notifyFailed() {
    hubotSend(message: 'Build failed', status: 'ERROR', site: 'slack-pr-ops')
}
