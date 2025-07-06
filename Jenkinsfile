pipeline {
    agent {
        docker {
            image 'node:24-bullseye'
            args '-u 0:0'
            reuseNode true
        }
    }
    environment {
        pf = 'https://github.com/skpub/portfolio_v3'
        private_key = credentials('SSH_SECRET_KEY_PF')
        deploy_host = credentials('PF_DEPLOY_HOST')
        deploy_user = credentials('PF_DEPLOY_USER')
        deploy_path = credentials('PF_DEPLOY_PATH')
    }
    stages {
        stage('Prepare') {
            steps {
                echo 'Installing rsync..'
                sh 'apt-get update && apt-get install -y rsync'
            }
        }
        stage('Checkout Repositories') {
            steps {
                echo 'Checking out repositories..'
                dir('portfolio_v3') {
                    git url: "${pf}", branch: 'master'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies..'
                dir('portfolio_v3') {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                dir('portfolio_v3') {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                dir('portfolio_v3') {
                    withCredentials([sshUserPrivateKey(credentialsId: "SSH_SECRET_KEY_PF", keyFileVariable: 'SSH_KEY')]) {
                        sh '''
                            chmod 600 "${SSH_KEY}"
                            export RSYNC_RSH="ssh -i ${SSH_KEY} -o StrictHostKeyChecking=no"
                            rsync -avz --delete ./build/ ${deploy_user}@${deploy_host}:${deploy_path}
                        '''
                    }
                }
            }
        }
    }
}
