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
                        container('jekyll') {
                            script {
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
                            sh "helm upgrade website-dev molgenis/molgenis --reuse-values --set website.image.tag=${TAG} --set website.image.repository=${LOCAL_REGISTRY}"
                        }
                    }
                }
            }
        }
        stage('Steps [ master ]') {
            when {
                branch 'master'
            }
            stages {
                stage('Build [ master ]') {
                    steps {
                        container('jekyll') {
                            script {
                                sh('jekyll build')
                                docker.withRegistry("https://${LOCAL_REGISTRY}", "molgenis-jenkins-registry-secret") {
                                    siteDocker = docker.build("${LOCAL_REPOSITORY}:latest", "--pull --no-cache --force-rm .")
                                    siteDocker.push('latest')
                                }
                            }
                        }
                    }
                }
                stage("Deploy to accept-site [ master ]") {
                    steps {
                        milestone(ordinal: 100, label: 'deploy to site.accept.molgenis.org')
                        container('helm') {
                            sh "helm init --client-only"
                            sh "helm repo add molgenis ${HELM_REPO}"
                            sh "helm repo update"
                            sh "helm upgrade site-accept molgenis/molgenis --reuse-values --set site.image.tag=latest --set site.image.repository=${LOCAL_REGISTRY}"
                        }
                    }
                }
                stage('Deploy release [ master ]') {
                    steps {
                        timeout(time: 10, unit: 'MINUTES') {
                            input(message: 'Prepare to release?')
                        }
                        milestone(ordinal: 100, label: 'deploy to test.molgenis.org')
                        container('helm') {
                            sh "helm init --client-only"
                            sh "helm repo add molgenis ${HELM_REPO}"
                            sh "helm repo update"
                            sh "helm upgrade prod-site molgenis/molgenis --reuse-values --set molgenis.image.tag=latest --set molgenis.image.repository=${LOCAL_REGISTRY}"
                        }
                    }
                }
            }
        }
    }
    post {
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
