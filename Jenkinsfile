pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout completed'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage'
                sh 'ls -l'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
                sh 'echo "Tests passed"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage (simulated)'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}

