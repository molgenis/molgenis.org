def siteDocker
pipeline {
    agent {
        kubernetes {
            label 'site-gen'
        }
    }
    environment {
        LOCAL_REPOSITORY = "${LOCAL_REGISTRY}/molgenis/website"
        CHART_VERSION = '0.3.3'
    }
    stages {
        stage('Retrieve build secrets') {
            steps {
                container('vault') {
                    script {
                        sh "mkdir /home/jenkins/.rancher"
                        sh(script: 'vault read -field=value secret/ops/jenkins/rancher/cli2.json > /home/jenkins/.rancher/cli2.json')
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
                                sh('chown -R jekyll:jekyll $(pwd)')
                                sh('jekyll doctor')
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
                        milestone(ordinal: 100, label: 'deploy to site.dev.molgenis.org')
                        container('rancher') {
                            sh "rancher context switch development"
                            sh "rancher apps upgrade --set website.image.tag=${TAG} website-dev ${CHART_VERSION}"
                        }
                    }
                }
            }
        }
        stage('Steps [ master ]') {
            when {
                branch 'master'
            }
            environment {
                TAG = "$BUILD_NR"
            }
            stages {
                stage('Build [ master ]') {
                    steps {
                        container('jekyll') {
                            script {
                                sh('chown -R jekyll:jekyll $(pwd)')
                                sh('jekyll doctor')
                                sh('jekyll build')
                                docker.withRegistry("https://${LOCAL_REGISTRY}", "molgenis-jenkins-registry-secret") {
                                    siteDocker = docker.build("${LOCAL_REPOSITORY}:$TAG", "--pull --no-cache --force-rm .")
                                    siteDocker.push('latest')
                                    siteDocker.push("$TAG")
                                }
                            }
                        }
                    }
                }
                stage("Deploy to accept-site [ master ]") {
                    steps {
                        milestone(ordinal: 100, label: 'deploy to site.accept.molgenis.org')
                        container('rancher') {
                            sh "rancher context switch acceptance"
                            sh "rancher apps upgrade --set website.image.tag=${TAG} website-accept ${CHART_VERSION}"
                        }
                    }
                }
                stage('Deploy release [ master ]') {
                    steps {
                        timeout(time: 10, unit: 'MINUTES') {
                            input(message: 'Prepare to release?')
                        }
                        milestone(ordinal: 100, label: 'deploy to www.molgenis.org')
                        container('rancher') {
                            sh "rancher context switch production"
                            sh "rancher apps upgrade --set website.image.tag=${TAG} website-prod ${CHART_VERSION}"
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
