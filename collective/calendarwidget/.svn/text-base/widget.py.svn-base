# -*- coding: iso-8859-15 -*-

################################################################
# collective.calendarwidget
# (C) 2009, ZOPYX Ltd. & Co. KG 
################################################################

import time
from App.class_init import InitializeClass
from AccessControl import ClassSecurityInfo
from DateTime.DateTime import DateTime
from Products.Archetypes.Widget import TypesWidget
from Products.Archetypes.Registry import registerWidget
from collective.js.jqueryui.utils import get_python_date_format


class CalendarWidget(TypesWidget):
    """A widget for DateTime fields
    """

    _properties = TypesWidget._properties.copy()
    _properties.update({
        'macro': 'collective_calendarwidget',
        'with_time': True,
        'default_hour': 0,
        'default_minute': 0,
        'helper_js': ('++resource++calendarwidget.js',),
        })

    security = ClassSecurityInfo()

    security.declarePublic('process_form')
    def process_form(self, instance, field, form, empty_marker=None, emptyReturnsMarker=False):
        fieldname = field.getName()
        datestr = form.get(fieldname)
        if not datestr:
            return empty_marker
        hours = int(form.get(fieldname + '_hour', 0))
        minutes = int(form.get(fieldname + '_minute', 0))
        datestr = '%s %s:%s:00' % (datestr, hours, minutes)
        date_format = get_python_date_format(instance.REQUEST)
        tp = time.strptime(datestr, date_format + ' %H:%M:%S')
        return DateTime(time.mktime(tp)), {}

    security.declarePublic('hours_minutes')
    def hours_minutes(self, date):
        """Return (hour, date) from a given DateTime instance.
        """
        if date:
            return date.hour(), date.minute()
        return '', ''

    security.declarePublic('datestr')
    def datestr(self, date):
        """Return formated date string from a given DateTime instance.
        """
        if date:
            format = get_python_date_format(self.REQUEST)
            return date.strftime(format)
        return ''

InitializeClass(CalendarWidget)

registerWidget(CalendarWidget,
               title='CalendarWidget',
               description='A simple calendar widget',
               used_for=('Products.Archetypes.Field.DateTimeField',)
               )
