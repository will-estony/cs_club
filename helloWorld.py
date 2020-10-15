age = 17        # int
name = 'Will'   # string
student = True  # boolean
major = 'CS'    # string 

print('-----------------------')
print('Hello, my name is ' + name)
print('I am ' + str(age) + ' years old')
print('I am majoring in ' + major)

if age >= 21:
   print('Have a beer')
elif age >= 18:
   print('Go buy a scratch off ticket')
elif age >= 16:
   print('Go get your license')
else:
   print('Have some water')

print('-----------------------')

for i in range(10):
   print(i)
